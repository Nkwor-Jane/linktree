import React from "react";
import "../styles/ContactMe.css";
import I4G from "../images/I4G.png";
import Zuri from "../images/zuri.png";

export default function ContactMe () {
  return (
    <div className="form_body">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <div>
            <form>
                <div className="minis">
                    <label htmlFor="first_name" className="labels">First Name</label>
                    <input required type="text" id="first_name" placeholder="Enter your first name" className="inputs" />
                </div>
                
                <div className="minis">
                    <label htmlFor="last_name" className="labels">Last Name</label>
                    <input required type="text" id="last_name" placeholder="Enter your last name"  className="inputs"/>
                </div>

                <div className="minis">
                    <label htmlFor="email" className="labels">Email</label>
                    <input required type="email" id="email" placeholder="yourname@email.com"  className="inputs"/>
                </div >
                

                <div className="minis">
                    <label htmlFor="meaasge" className="labels">Message</label>
                    <textarea required name="message"  id="message" placeholder="Send me a message and I'll reply you as soon as possible..." className="inputs"/>
                </div>

                <div className="minis checkbox_section">
                    <input required type="radio" name="agreement" id="agreement" />
                    <label htmlFor="agreement">You agree to providing your data to
                    &#123;name&#125;
                    who may contact you.</label>
                </div>
                
                <button type="submit" id="btn__submit">Send message</button>
            </form>
        </div>
        
        <footer>
            <hr/>
            <div className="unique_footer">
                    <div>
                        <img src={Zuri} alt="Zuri" />
                    </div>
                    <div>
                        <p>HNG Internship 9 Frontend Task</p>
                    </div>
                    <div>
                        <img src={I4G} alt="I4G" />
                    </div>
            </div>
        </footer>
    </div>
  )
}
