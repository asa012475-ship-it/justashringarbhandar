import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

export default function Contact() {
  // Replace 'yourFormIDHere' with your real Formspree form ID (e.g. xqkvnldp)
  const [state, handleSubmit] = useForm('yourFormIDHere');
  const [sent, setSent] = useState(false);

  if (state.succeeded || sent) {
    return (
      <div className="page">
        <header className="header"><h1 className="brand">JustAShringar</h1></header>
        <main className="container">
          <h2>Thanks — we received your message!</h2>
          <p>We'll get back to you at the earliest.</p>
        </main>
        <footer className="footer">© {new Date().getFullYear()} JustAShringar</footer>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header"><h1 className="brand">JustAShringar</h1></header>
      <main className="container">
        <h2>Contact Us</h2>
        <form onSubmit={(e) => { handleSubmit(e); setSent(true); }} className="form">
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Email</label>
          <input type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label>Message</label>
          <textarea name="message" rows={4} required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          <button className="btn" type="submit" disabled={state.submitting}>Send Message</button>
        </form>

        <div className="contact-info">
          <p>Phone: +91 99999 88888</p>
          <p>Location: New Delhi, India</p>
        </div>
      </main>
      <footer className="footer">© {new Date().getFullYear()} JustAShringar</footer>
    </div>
  );
}
