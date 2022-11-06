import React from "react";
import "../styles/ProfilePage.css";
// import images 
import ProfileImage from "../images/profile.jpg";

import Footer from "./Footer";
import { Link} from "react-router-dom";


export default function ProfilePage() {
    return (
        <div className="profile">
            <div className="icon">

            </div>
            <div className="image">
                <img src={ProfileImage} alt="Annette" id="profile_img" className="my_image"/>
            </div>
            <h3>Nkwor Jane</h3>

            <div className="btns">
                <div className="twitter-btn">
                    <button className="twitter" id="twitter">gifted_jane</button>
                </div>
                <div className="slack">
                    <button id="slack">Gifted</button>
                </div>
                <div className="links">
                    <a href="https://training.zuri.team/" className="team" id="btn__zuri" target="_blank" rel="noreferrer noopener">Zuri Team</a>
                </div>
                <div className="links">
                    <a href="http://books.zuri.team/" 
                    className="books" 
                    id="books" target="_blank" 
                    rel="noreferrer noopener"
                    title="Find books about design and coding here."
                    >
                        Zuri Books
                    </a> 
                </div>
                <div className="links">
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=<gifted>" 
                    className="python" id="book_python" target="_blank" rel="noreferrer noopener">Python Books</a>
                </div>
                <div className="links">
                    <a href="https://background.zuri.team/" className="check" 
                    id="pitch" target="_blank" rel="noreferrer noopener"
                    title="The goal is to do business with people who believe in what you believe."
                    >Background Check for coders</a>
                </div>
                <div className="links">
                    <a href="https://books.zuri.team/design-rules" className="design" 
                    id="book_design" target="_blank" rel="noreferrer noopener"
                    title="The designer's guide."
                    >Design Books</a>
                </div>

                <div className="links">
                        <Link to="/contact" id="contact">Contact Me</Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
