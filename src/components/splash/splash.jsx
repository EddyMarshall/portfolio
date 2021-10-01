import React from 'react';
import { Link } from 'react-router-dom'

class Splash extends React.Component {
    render() {
        return(
        <div>
            <div className="splash-background">
                <div className="background-overlay">
                </div>
            </div>

            <div className="header-container">
                <h1 className="header-proper">
                    Eddy Marshall
                </h1>
                <h2 className="tagline">
                    Software Engineer | Musician | Educator
                </h2>
            </div>
                <ul className="links-container">
                        <Link to="/programming" className="list-link">
                            <li>
                                Programming
                            </li>
                        </Link>

                        <a href="https://EddyMarshallMusic.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="list-link"
                            >
                                <li>
                                    Music
                                </li>
                        </a>

                        <Link to="/contact" className="list-link">
                            <li>
                                Contact
                            </li>
                        </Link>
                </ul>
        </div>
        
        )
    }
}

export default Splash;