import React from 'react';
import { Link } from 'react-router-dom'

class Contact extends React.Component {
    render() {
        return (
            <div>

                <div className="contact-background" >
                    <div className="contact-background-overlay">
                    </div>
                </div>

                <div className="header-container">
                    <Link to="/">
                        <h1 className="header-proper">
                            Edward Marshall
                        </h1>
                    </Link>
                    <h2 className="tagline">
                        Contact
                    </h2>
                </div>

                <div className="links-centerer">
                    <h3 className="email">Send me an email 
                    at <a href="mailto: epmarsha2@gmail.com" className="email-link">epmarsha2@gmail.com</a></h3>
                    <ul className="links">
                        <a href="https://www.linkedin.com/in/edward-marshall-092ba6b9/" className="social-media-link" target="_blank"
                            rel="noopener noreferrer">LinkedIn</a>

                        <a href="https://angel.co/u/edward-marshall-8" className="social-media-link" target="_blank"
                            rel="noopener noreferrer">AngelList</a>

                        <a href="https://github.com/EddyMarshall" className="social-media-link" target="_blank"
                            rel="noopener noreferrer">GitHub</a>

                        <a href="https://www.instagram.com/eddymarshallmusic" className="social-media-link" target="_blank"
                            rel="noopener noreferrer">Instagram</a>
                    </ul>
                </div>
            </div>


        )
    }
}

export default Contact;