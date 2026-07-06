/**
 * Île React : formulaire de contact branché sur Formspree (https://formspree.io).
 * Envoi en fetch (sans rechargement), avec états de chargement / succès / erreur
 * et un champ honeypot anti-spam.
 */
import { useState, type FormEvent } from 'react';

interface Props {
  /** Identifiant du formulaire Formspree (voir src/data/site.ts) */
  formspreeId: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

/** Styles partagés des champs du formulaire */
const fieldClass =
  'w-full rounded-md border border-line bg-card px-4 py-3 text-fog placeholder:text-mist/60 ' +
  'transition-colors focus:border-brass focus:outline-none';

export default function ContactForm({ formspreeId }: Props) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-fog">
            Nom
          </label>
          <input id="nom" type="text" name="nom" required autoComplete="name" placeholder="Votre nom" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fog">
            Email
          </label>
          <input id="email" type="email" name="email" required autoComplete="email" placeholder="vous@exemple.com" className={fieldClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-fog">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="Votre message…" className={`${fieldClass} resize-y`} />
      </div>

      {/* Honeypot anti-spam : champ invisible que seuls les robots remplissent */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center gap-2 rounded-md bg-brass px-6 py-3 font-semibold text-night transition-colors hover:bg-brass-bright disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>

      {/* Retour utilisateur, annoncé aux lecteurs d'écran */}
      <p role="status" aria-live="polite" className="min-h-6 text-sm">
        {status === 'success' && (
          <span className="font-medium text-brass">Merci ! Votre message a bien été envoyé, je vous répondrai rapidement.</span>
        )}
        {status === 'error' && (
          <span className="font-medium text-red-400">
            Une erreur est survenue. Réessayez, ou écrivez-moi directement par email.
          </span>
        )}
      </p>
    </form>
  );
}
