import Button from "../../components/Button/Button.jsx";
import "./Contact.css";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__overline">04. What’s Next?</h2>
      <h2 className="contact__title">Get In Touch</h2>
      <p>
        Although I’m currently focused on my studies, I’m open to taking on
        freelance projects. Feel free to reach out if you have an opportunity or
        just want to connect, I’ll do my best to respond!
      </p>

      <Button text="Say Hello" href="mailto:joao.santos.2007sp@gmail.com" />
    </section>
  );
};

export default Contact;
