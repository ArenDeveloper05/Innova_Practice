import React from 'react'
import { Link } from 'react-router-dom'
//images
import background from "../../assets/images/Contact/background.jpg"
//icons
import { HiHome } from "react-icons/hi"
import { AiTwotonePhone } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { BiTime } from "react-icons/bi"
//styles 
import "./Contact.scss"
const Contact = () => {
    return (
        <section className='contact-section'>
            <div className="contact">
                <div className="contact-heading-modal" style={{ backgroundImage: `url(${background})` }}>
                    <div className="contact-heading">
                        <h1>Contact Us</h1>
                        <div className="contact-heading-pages">
                            <Link to="/">Home </Link>
                            <span>/</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
                <div className="contact-details">
                    <div>
                        <h2>Get in touch</h2>
                        <h1>CONTACT US</h1>
                        <div>
                            <div className="contact-details-title">
                                <h3>Contact Details</h3>
                                <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                                <div className="contact-details-title-info">
                                    <div><HiHome /> <span>55 Drumburgh Ave, Carlisle CA3 0PD, UK</span></div>
                                    <div><AiTwotonePhone /> <span>+91 123 456 7890, +91 123 456 789</span></div>
                                    <div><MdEmail /> <span>Info@gmail.com</span></div>
                                    <div><BiTime /> <span>Monday – Friday: 10 am – 10pm Sunday: 11 am – 9pm</span></div>
                                </div>
                            </div>
                            <form>
                                <input type="text" placeholder='Email' />
                                <input type="text" placeholder='Subject' />
                                <input type="text" placeholder='Phone' />
                                <textarea name="Message" id="message" cols="0" rows="10" placeholder='Message'></textarea>
                                <button type='button'>SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="contact-map">
  <div style={{ width: "100%" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48705.488087659294!2d44.58437479957778!3d40.27368416376813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1c3ec9f2329%3A0x5cee9f0e0c28a3b5!2z0JDQsdC-0LLRj9C9!5e0!3m2!1sru!2sam!4v1694364757380!5m2!1sru!2sam"
      style={{ width: "100%", height: "450px", border: "0" }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

            </div>
        </section>
    )
}

export default Contact