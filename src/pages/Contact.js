// src/pages/Contact.js
import React from 'react';

function Contact() {
  return (
    <main className="page-content">
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email or the form below!</p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <label>
          Message:
          <textarea name="message" rows="5"></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default Contact;