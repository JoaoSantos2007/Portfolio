import Button from "../../components/Button"
import "./Contact.css"
import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__overline">04. What’s Next?</h2>
      <h2 className="contact__title">Get In Touch</h2>
      <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>

      <Button text="Say Hello" href="mailto:joao.santos.2007sp@gmail.com" />
    </section>
  )
}

export default Contact