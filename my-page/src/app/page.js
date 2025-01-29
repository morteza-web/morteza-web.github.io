import Image from "next/image";
import profilepic from "../../public/profilepic2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

import styles from "./page.module.css";

export default function Home() {
    return (
        <div className="main">
            <header></header>

            <section className="section aboutme">
                <div className="prof-pic">
                    <Image src={profilepic} alt="profile" />
                </div>

                <div className="text">
                    <span>
                        Unlock the Power of Exceptional Web Design with{" "}
                        <b>Morteza</b> - Front-End Developer
                    </span>
                    <a href="#contact">
                        <button className="btn">contact</button>
                    </a>
                </div>
            </section>

            <section className="section skills">
                <FontAwesomeIcon icon={faHtml5} size="4x"/>
                <FontAwesomeIcon icon={faCss3} size="4x"/>
                <FontAwesomeIcon icon={faJs} size="4x"/>
                <FontAwesomeIcon icon={faReact} size="4x"/>
                <FontAwesomeIcon icon={faWordpress} size="4x"/>
                <FontAwesomeIcon icon={faFigma} size="4x"/>
            </section>

            <section className="section article">
                <h2>What I Can Do for You</h2>

                <section>
                    <div className="service">
                        <FontAwesomeIcon icon={faCode} size="2x"/>
                        <h4>Custom Websites</h4>
                        <span>
                            From simple landing pages to full-scale web
                            applications, I create websites tailored to your
                            vision and needs.
                        </span>
                    </div>

                    <div className="service">
                        <FontAwesomeIcon icon={faSketch} size="2x"/>
                        <h4>Website Redesigns</h4>
                        <span>
                            {" "}
                            If your current website is outdated or
                            underperforming, I can give it a modern, responsive
                            makeover to improve both aesthetics and
                            functionality.
                        </span>
                    </div>

                    <div className="service">
                        <FontAwesomeIcon icon={faStore} size="2x"/>
                        <h4>E-commerce Integration</h4>
                        <span>
                            I can set up and customize online stores using
                            platforms like WordPress with WooCommerce or
                            integrate e-commerce functionality into React
                            applications.
                        </span>
                    </div>

                    <div className="service">
                        <FontAwesomeIcon icon={faInfo} size="2x"/>
                        <h4>Ongoing Support</h4>
                        <span>q
                            I'm committed to providing ongoing support and
                            maintenance for your website, ensuring it remains
                            secure, up-to-date, and functional.
                        </span>
                    </div>
                </section>
            </section>

            <section className="section contact" id="contact">
                <FontAwesomeIcon icon={faHandshake} size="3x"/>
                <p>Tell me about your next project</p>
                <div>
                    <a href="mailto:morteza.t.396@gmail.com">
                        <button className="btn">
                            <FontAwesomeIcon icon={faEnvelope} />
                            Email me
                        </button>
                    </a>

                    <a href="https://t.me/morteza_tnh" target="_blank">
                        <button className="btn">
                            <FontAwesomeIcon icon={faTelegram} />
                            masssage me
                        </button>
                    </a>
                </div>

                {/* <div className="contact-info">
                <p>Phone: <a href="tel:+989370365494">09370365494</a></p>
                <p>Telegram: <a href="https://t.me/morteza-tnh" target="_blank">morteza-tnh</a></p>
                <p>Email: <a href="mailto:morteza.t.396@gmail.com">morteza.t.396@gmail.com</a></p>
            </div> */}
                <div className="footer">
                    <div>
                        <span>
                            &copy; 2025 Morteza Tanhaei. All rights reserved.
                        </span>
                    </div>

                    <div>
                        <span>
                            <a href="https://t.me/morteza_tnh" target="_blank">
                                Telegram
                            </a>
                        </span>
                        /
                        <span>
                            <a href="mailto:morteza.t.396@gmail.com">Email</a>
                        </span>
                    </div>
                </div>
            </section>

            {/* <section>
            <a href="first/test.html">link to test page</a>
        </section> */}
        </div>
    );
}
