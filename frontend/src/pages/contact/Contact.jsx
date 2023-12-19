import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <div>
      {" "}
      <header>
        <h1>Contact Aestechs</h1>
        <p>We're Here to Assist You</p>
      </header>
      <section class="contact-content">
        <div class="contact-form">
          <form action="#" method="POST">
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Your Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div class="contact-info">
          <h2>Reach Us</h2>
          <p>
            If you prefer to talk, feel free to reach out to us via email or
            phone. We're here to answer any questions you may have.
          </p>

          <p>
            Email: <a href="mailto:aestechs@gmail.com">aestechs@gmail.com</a>
          </p>
          <p>Phone: +1 234 5678</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
