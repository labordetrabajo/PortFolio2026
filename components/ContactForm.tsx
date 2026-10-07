"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeqwvvne";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Match the working jQuery form: send standard URL-encoded form fields.
    const body = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === "string") body.append(key, value);
    });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        let detail = "Unable to send the message right now.";
        try {
          const result = await response.json();
          if (result?.errors?.[0]?.message) detail = result.errors[0].message;
          else if (result?.error) detail = result.error;
        } catch {}
        throw new Error(detail);
      }

      form.reset();
      setStatus("success");
      setMessage("Message sent successfully. Thank you — I will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the message."
      );
    }
  }

  return (
    <form
      id="contact-form"
      className="contact-form"
      action={FORMSPREE_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        <label>
          <span>NAME</span>
          <input id="sender_name" name="name" type="text" required placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          <span>EMAIL</span>
          <input id="sender_email" name="email" type="email" required placeholder="your@email.com" autoComplete="email" />
        </label>
      </div>
      <label>
        <span>SUBJECT</span>
        <input id="subject" name="subject" type="text" required placeholder="Project, collaboration, consulting..." />
      </label>
      <label>
        <span>MESSAGE</span>
        <textarea id="message_content" name="message" required rows={7} placeholder="Tell me about the system you want to build." />
      </label>
      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "sending()" : "send_message()"}
        </button>
      </div>
      {message && <p className={`form-status form-status-${status}`}>{message}</p>}
    </form>
  );
}
