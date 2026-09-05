/*
  All form traffic goes through a single backend endpoint so the Brevo API key
  never reaches the browser. Point VITE_FORMS_ENDPOINT at the Supabase Edge
  Function (or any serverless route) that forwards to Brevo.
*/
const ENDPOINT = import.meta.env.VITE_FORMS_ENDPOINT as string | undefined;

export type NewsletterPayload = {
  email: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
};

type SubmitResult = { ok: true } | { ok: false; error: string };

async function post(path: string, body: unknown): Promise<SubmitResult> {
  if (!ENDPOINT) {
    return {
      ok: false,
      error: "Form endpoint is not configured. Set VITE_FORMS_ENDPOINT.",
    };
  }

  try {
    const response = await fetch(`${ENDPOINT}/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const detail = await response.text();
      return { ok: false, error: detail || `Request failed (${response.status})` };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, error: (error as Error).message };
  }
}

export const subscribeToNewsletter = (payload: NewsletterPayload) =>
  post("newsletter", payload);

export const sendContactRequest = (payload: ContactPayload) =>
  post("contact", payload);
