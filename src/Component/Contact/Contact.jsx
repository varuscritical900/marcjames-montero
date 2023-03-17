import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const[done, setDone]= useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_l07lj5o", "template_y47rose", form.current, "ISXdOAX4K7EIS7Agw")
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode?'white': ''}}>Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Your name..."/>
                    <input type="email" name="user_email" className="user" placeholder="Your email..."/>
                    <textarea name="message" className="user" placeholder="Your message..."/>
                    <input type="submit" value="Send" className="button"/>
                    <span>{done && "Thank you for contacting me"}</span>
                    <div 
                        className="blur c-blur1"
                        style={{background: "var(--purple)"}}></div>

                </form>
            </div>
        </div>
    )
}

export default Contact