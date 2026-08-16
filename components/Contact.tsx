'use client';

import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          project: formData.project,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      toast.success('Message sent successfully! 🚀');

      setFormData({
        name: "",
        email: "",
        project: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section_title" data-aos="zoom-in">
          Get in touch
        </h2>
        <span className="section_subtitle" data-aos="zoom-in">
          Let’s Work Together
        </span>

        <div className="contact_container container grid">
          {/* Left Side: Contact Me */}
          <div className="contact_content">
            <h3
              className="contact_title"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              Contact Me
            </h3>

            <div className="contact_info">
              <div
                className="contact_card"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="uil uil-envelope-upload contact_card_icon"></i>
                <h3 className="contact_card_title">Email</h3>
                <span className="contact_card_data">
                  muhammadarsalan7531@gmail.com
                </span>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadarsalan7531@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_button"
                >
                  Email me
                  <i className="uil uil-arrow-right contact_button_icon"></i>
                </a>
              </div>

              <div
                className="contact_card"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="uil uil-whatsapp contact_card_icon"></i>
                <h3 className="contact_card_title">Whatsapp</h3>
                <span className="contact_card_data">+92 348 1246429</span>
                <a
                  href="https://api.whatsapp.com/send?phone=923481246429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_button"
                >
                  Message
                  <i className="uil uil-arrow-right contact_button_icon"></i>
                </a>
              </div>

              <div
                className="contact_card"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <i className="uil uil-linkedin-alt contact_card_icon"></i>
                <h3 className="contact_card_title">LinkedIn</h3>
                <span className="contact_card_data">Muhammad Arsalan</span>
                <a
                  href="https://www.linkedin.com/in/muhammad-arsalan-71a673265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact_button"
                >
                  Connect
                  <i className="uil uil-arrow-right contact_button_icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Tell me about your project */}
          <div className="contact_content">
            <h3
              className="contact_title"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              Tell me about your project
            </h3>

            <form onSubmit={handleSubmit} className="contact_form">
              <div
                className="contact_form_div"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label className="contact_form_tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact_form_input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div
                className="contact_form_div"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <label className="contact_form_tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact_form_input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div
                className="contact_form_div contact_project_area"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <label className="contact_form_tag">Project</label>
                <textarea
                  name="project"
                  cols={30}
                  rows={10}
                  className="contact_form_input"
                  placeholder="Tell me about your project"
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="button button_flex"
                data-aos="flip-right"
                data-aos-delay="800"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <i className="uil uil-navigator button_icon"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
}
