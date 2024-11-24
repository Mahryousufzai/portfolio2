import React from 'react';
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import styles from '../../../styles/contact.module.css'

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left side - Contact Info */}
        <div className="space-y-8">
          <h2 className={styles.heading} data-aos="fade-down-left">
            Get In Touch
          </h2>
          <p className={styles.description} data-aos="fade-down-left">
            If you have any questions or would like to collaborate, please don&apos;t hesitate to reach out.
          </p>
          <div className={styles.contactItem} data-aos="fade-down-left">
            <IoMdMail size={30} />
            <span>Mahrali@gmail.com</span>
          </div>
          <div className={styles.contactItem} data-aos="fade-down-left">
            <BsFillTelephoneInboundFill size={30} />
            <span>03194756822</span>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="space-y-8">
          <div className={styles.inputGroup} data-aos="fade-down-left">
            <label htmlFor="name">Name</label>
            <input type="text" className={styles.inputField} id="name" />
          </div>
          <div className={styles.inputGroup} data-aos="fade-down-left">
            <label htmlFor="email">Email</label>
            <input type="email" className={styles.inputField} id="email" />
          </div>
          <div className={styles.inputGroup} data-aos="fade-down-left">
            <label htmlFor="msg">Message</label>
            <textarea className={styles.textareaField} id="msg" rows={7}></textarea>
          </div>
          <button className={styles.sendButton} data-aos="fade-down-left">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;