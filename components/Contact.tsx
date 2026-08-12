'use client';

import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', project: '' });
    }, 4000);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title" data-aos="zoom-in">
        Get in touch
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Contact Me
      </span>

      <div className="contact_container container grid">
        {/* Left Side: Talk to me */}
        <div className="contact_content">
          <h3
            className="contact_title"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            Talk to me
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
                href="mailto:muhammadarsalan7531@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact_button"
              >
                Write me
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
                rel="noreferrer"
                className="contact_button"
              >
                Write me
                <i className="uil uil-arrow-right contact_button_icon"></i>
              </a>
            </div>

            <div
              className="contact_card"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <i className="uil uil-facebook-messenger contact_card_icon"></i>
              <h3 className="contact_card_title">Messenger</h3>
              <span className="contact_card_data">arsalan.tanoli.712</span>
              <a
                href="https://m.me/arsalan.tanoli.712"
                target="_blank"
                rel="noreferrer"
                className="contact_button"
              >
                Write me
                <i className="uil uil-arrow-right contact_button_icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Write me your project */}
        <div className="contact_content">
          <h3
            className="contact_title"
            data-aos="fade-left"
            data-aos-delay="0"
          >
            Write me your project
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
                placeholder="Insert your name"
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
                placeholder="Insert your email"
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
                placeholder="Write your project"
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
              {submitted ? 'Message Sent!' : 'Send Message'}
              <i className="uil uil-navigator button_icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
