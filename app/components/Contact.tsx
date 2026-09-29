
"use client";

import { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithubAlt, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xljdzdze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(
          data.errors?.[0]?.message ||
            "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <p className="contact-subtitle">
          Have an internship opportunity, project, or collaboration?
          I'd love to hear from you.
        </p>

        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-info">

            {/* Email */}
            <div className="info-card">
              <span>
                <SiGmail />
              </span>

              <div>
                <h3>Email</h3>
                <a href="mailto:sudeepshetty616@gmail.com">
                  sudeepshetty616@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="info-card">
              <span>
                <FaPhone />
              </span>

              <div>
                <h3>Phone</h3>
                <a href="tel:+919964213038">
                  +91 9964213038
                </a>
              </div>
            </div>

          
            <div className="info-card">
              <span>
                <FaWhatsapp />
              </span>

              <div>
                <h3>WhatsApp</h3>
                <a
                  href="https://wa.me/919964213038"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="info-card">
              <span>
                <FaLinkedin />
              </span>

              <div>
                <h3>LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/sudeep-shetty616"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/sudeep-shetty616
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="info-card">
              <span>
                <FaGithubAlt />
              </span>

              <div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/Sudeepshetty28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Sudeepshetty28
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <form className="contact-form" onSubmit={handleSubmit}>

            {/* Name + Email */}
            <div className="row">

              <div className="input-group">
                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* Subject */}
            <div className="input-group">
              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="input-group">
              <label>Message</label>

              <textarea
                name="message"
                rows={7}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="send-btn">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

