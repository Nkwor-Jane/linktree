import React from "react";
import Slack from "../images/slack.png";
import Github from "../images/github.png";
import I4G from "../images/I4G.png";
import Zuri from "../images/zuri.png"
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
                <div className="social-icons">
                    <div>
                        <img src={Slack} alt="Slack" />
                    </div>
                    <div>
                        <img src={Github} alt="Github" />
                    </div>
                </div>
                    <hr/>
                <div className="logos">
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
  )
}
