import { useState } from "react";
import type { FormEvent } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <div className="contact-card">
        <h1 className="contact-card__title">Contact us</h1>
        <p className="contact-card__subtitle">
          Ai o întrebare sau vrei să faci o comandă specială? Scrie-ne mai jos.
        </p>

        <form className="contact-card__form" onSubmit={handleSubmit}>
          <label className="contact-card__label" htmlFor="contact-name">
            Nume
          </label>
          <input
            id="contact-name"
            className="contact-card__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Numele tău"
            required
          />

          <label className="contact-card__label" htmlFor="contact-email">
            Email
          </label>
          <input
            id="contact-email"
            className="contact-card__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="adresa@exemplu.com"
            required
          />

          <label className="contact-card__label" htmlFor="contact-message">
            Mesaj
          </label>
          <textarea
            id="contact-message"
            className="contact-card__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Scrie mesajul tău aici..."
            rows={6}
            required
          />

          {submitted && (
            <p className="contact-card__success">
              Mulțumim! Mesajul tău a fost trimis.
            </p>
          )}

          <button type="submit" className="contact-card__submit">
            Trimite mesajul
          </button>
        </form>
      </div>
    </main>
  );
}
