"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";

const topics = [
  "Digital Marketing Strategy",
  "Branding",
  "Social Media Strategy",
  "Content Marketing",
  "Business Development",
  "Speaking Engagement",
  "Something Else",
];

type Status = "idle" | "loading" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "topic" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (formData: FormData): Errors => {
    const next: Errors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name) next.name = "Please share your name.";
    if (!email) next.email = "Please share your email.";
    else if (!EMAIL_RE.test(email)) next.email = "That email doesn't look right.";
    if (!topic) next.topic = "Please choose a topic.";
    if (!message) next.message = "Tell me a little about your project.";

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          topic: formData.get("topic"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const inputClass =
    "w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-soft/60 transition-colors focus:border-rose-dark focus:ring-1 focus:ring-rose-dark focus:outline-none";

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-sage-dark/40 bg-sage/30 p-8">
        <CheckCircle2 className="text-sage-dark" size={28} />
        <p className="font-serif text-lg font-semibold text-charcoal">
          Message sent!
        </p>
        <p className="text-sm text-charcoal-soft">
          Thank you for reaching out. I&apos;ll get back to you within one to
          two business days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-rose-dark underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-charcoal">
            Full Name <span className="text-rose-dark">*</span>
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={inputClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-rose-dark">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-charcoal">
            Email Address <span className="text-rose-dark">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-rose-dark">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-charcoal">
          Company / Brand
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={inputClass} />
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-xs font-medium text-charcoal">
          What can I help you with? <span className="text-rose-dark">*</span>
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue=""
          className={inputClass}
          aria-invalid={!!errors.topic}
          aria-describedby={errors.topic ? "topic-error" : undefined}
        >
          <option value="" disabled>
            Select a topic
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic && (
          <p id="topic-error" className="mt-1 text-xs text-rose-dark">
            {errors.topic}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-charcoal">
          Message <span className="text-rose-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-rose-dark">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl border border-rose-dark/30 bg-blush/40 px-4 py-3 text-sm text-rose-dark">
          <TriangleAlert size={16} />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-medium text-ivory transition-transform duration-200 hover:-translate-y-0.5 hover:bg-rose-dark disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
