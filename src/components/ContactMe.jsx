import React from "react";
import "../styles/ContactMe.css";
import I4G from "../images/I4G.png";
import Zuri from "../images/zuri.png";

import {useForm} from "react-hook-form";

export default function ContactMe () {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = res => console.log(res)
  return (
    <div className="">
        <div className="form_body">
            <section>
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </section>
            <section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="names">
                        <div className="minis">
                            <label htmlFor="first_name" className="labels">First Name</label>
                            <input {...register("first_name", {required: true})} type="text" id="first_name" placeholder="Enter your first name" className="inputs" />
                            {errors.first_name && <span>First name is required</span>}
                        </div>
                        
                        <div className="minis mini_last_name">
                            <label htmlFor="last_name" className="labels">Last Name</label>
                            <input {...register("last_name", {required: true})} type="text" id="last_name" placeholder="Enter your last name"  className="inputs"/>
                            {errors.last_name && <span>Last name is required</span>}
                        </div>
                    </div>

                    <div className="minis">
                        <label htmlFor="email" className="labels">Email</label>
                        <input {...register("email", {required:true})} type="email" id="email" placeholder="yourname@email.com"  className="inputs"/>
                        {errors.email && <span>Email address is required</span>}
                    </div >
                    
                    <div className="minis">
                        <label htmlFor="meaasge" className="labels">Message</label>
                        <textarea {...register("message", {required:true})} name="message"  rows="10" cols="40" id="message" placeholder="Send me a message and I'll reply you as soon as possible..." className="inputs"/>
                        {errors.message && <span>Please enter a message.</span>}
                    </div>

                    <div className="minis checkbox_section">
                        <input {...register("agreement")} type="checkbox" name="agreement" id="agreement" />
                        <label htmlFor="agreement">You agree to providing your data to Jane who may contact you.</label>
                    </div>
                    <div>

                    </div>
                    <button type="submit" id="btn__submit" className="contact_btn">Send message</button>
                </form>
            </section>
            
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
