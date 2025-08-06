import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uaaugen",
        "template_a28uipb",   
        form.current,
        "cmrmIDZu0sDohj-WT"     
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (

    <div className="contactpage">

    <div className="contactinto">
      
      <h1>Lets Work Together</h1>

      <p>
        Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
      </p>

    </div>


    <form ref={form} onSubmit={sendEmail} className="DetailsForm">


      <h2>Send a Message</h2>

      <p>Fill out the form below  I'll get back to you as soon as possible.</p>

      <label htmlFor="name">
        Name <br />
      <input type="text" name="name" placeholder="Your Name" required  className="data"/>
      </label>

      <label htmlFor="email" >
        Email <br />
      <input type="email" name="email" placeholder="Your Email" required className="data" />
      </label>

      <label htmlFor="message">
        Message
        <br />
      <textarea name="message" placeholder="Enter Your Message" required className="data" />
      </label>


      <button type="submit" >
        Send
      </button>
    </form>


    <div className="basicDeatils">

      <h2>Get In Touch</h2>
      <p>Prefer to reach out directly? Here's how you can contact me</p>

      <div>

        <div className="block_details">
         
          <p>akhiltuluri123@gmail.com</p>


        </div>
        <div className="block_details">
     
          <p>+91 9666440579</p>
        </div>

        <div className="block_details">
          
          <p>Current Location : Nit Srinagar,Jammu and Kashmir</p>
        </div>
      </div>

    </div>
    </div>

  );
};

export default Contact;
