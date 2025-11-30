import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const contactMethods = [
  {
    icon: <MdCall size={25} />,
    label: "Call",
    info: "012-342-13332",
    buttonText: "Call Now",
    link: "tel:01234213332",
  },
  {
    icon: <BsFillChatDotsFill size={25} />,
    label: "Chat",
    info: "prince@24.com",
    buttonText: "Chat Now",
    link: "#",
  },
  {
    icon: <HiOutlineMail size={25} />,
    label: "Email",
    info: "nicksing914@gmail.com",
    buttonText: "Send Email",
    link: "mailto:nicksing914@gmail.com",
  },
  {
    icon: <FaWhatsapp size={25} />,
    label: "WhatsApp",
    info: "+91 6200311773",
    buttonText: "Message Now",
    link: "https://wa.me/916200311773",
    isWhatsapp: true,
  },
];

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="contact-section">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">
          We’re always ready to help with the best services.
        </p>

        <div className="contact-grid">
          {contactMethods.map((method, idx) => (
            <div
              className={`contact-card ${method.isWhatsapp ? "whatsapp" : ""}`}
              key={idx}
            >
              <div className="contact-header">
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-info">
                  <span className="contact-type">{method.label}</span>
                  <span className="contact-detail">{method.info}</span>
                </div>
              </div>
              <a
                className={`contact-button ${method.isWhatsapp ? "whatsapp-btn" : ""}`}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {method.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
