import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { getCalApi } from "@calcom/embed-react";
import "../App.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#ff5252" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

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
    <div className="contact-page">
      <div className="contact-bg-text">CONTACT</div>
      <div className="contact-container">

        {/* Left Side: Info & Calendar */}
        <div className="contact-info" data-aos="fade-right">
          <h1>Let's Connect</h1>
          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="cal-section" style={{ marginTop: '0', marginBottom: '3rem', borderTop: 'none', padding: '0' }}>
            <h3>Schedule a Call</h3>
            <p>Pick a time that works for you.</p>
            <button
              data-cal-namespace="15min"
              data-cal-link="akhiltuluri"
              data-cal-config='{"layout":"month_view"}'
              className="cal-btn"
            >
              <span className="cal-icon"></span> Book a Meeting
            </button>
          </div>

          <div className="info-items">
            <div className="info-item">
              <span className="icon">📧</span>
              <span>akhiltuluri123@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <span>+91 9666440579</span>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <span>NIT Srinagar, Jammu and Kashmir</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Send a Message</h2>

            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Your Message" required rows="5"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
