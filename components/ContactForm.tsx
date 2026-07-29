"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Hello from ${name}` : "Hello from your portfolio"
    );
    const body = encodeURIComponent(
      `${message}\n\n---\n${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full border border-line bg-surface px-4 py-3 text-ink outline-none transition-colors placeholder:text-faint focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mono-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={`mt-2 ${field}`}
        />
      </div>
      <div>
        <label htmlFor="email" className="mono-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={`mt-2 ${field}`}
        />
      </div>
      <div>
        <label htmlFor="message" className="mono-label">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like to build or talk about?"
          className={`mt-2 resize-y ${field}`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Send message
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
      <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
        This opens your mail app addressed to me.
      </p>
    </form>
  );
}
