import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  topic: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, topic, message } = payload;

  if (!name?.trim() || !email?.trim() || !topic?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  // TODO: Connect this endpoint to an email provider before going live, e.g.:
  // - Formspree: POST `payload` to your Formspree endpoint URL
  // - Resend: use the Resend SDK to send a transactional email
  // - Or forward `payload` to any other CRM / inbox integration
  //
  // For now this simply acknowledges receipt so the frontend flow can be
  // fully built and tested end to end.

  return NextResponse.json({ success: true });
}
