import React from "react";
import Footer from "./Footer";

export default function ContactMe () {
  return (
    <div>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div>
            <form action="">
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" placeholder="Enter your first name" />

                <label htmlFor="last_name">Lastt Name</label>
                <input type="text" id="last_name" placeholder="Enter your last name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="yourname@email.com" />

                <label htmlFor="meaasge">Message</label>
                <textarea name="message" id="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>

                <label htmlFor="agreement">You agree to providing your data to
                 {/* \{name}\  */}
                 who may caontact you.</label>
                <input type="checkbox" name="agreement" id="agreement" />
                <button type="submit" id="btn__submit">Send message</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}
