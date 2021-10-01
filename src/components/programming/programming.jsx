import React from 'react';
import { Link } from 'react-router-dom'
import voiceImage from '../../styles/assets/VLV.png';
import conduitImage from '../../styles/assets/Conduit.png';
import generatorImage from '../../styles/assets/chord_pro_gen.png';

class Programming extends React.Component {
    render() {
        return (
            <div>
                <div className = "programming-background" >
                    <div className="programming-background-overlay">
                    </div>
                </div>

                <div className="header-container">
                    <Link to="/">
                        <h1 className="header-proper">
                            Edward Marshall
                        </h1>
                    </Link>
                    <h2 className="tagline">
                        Software Engineer
                        <br />
                        <Link to="/Edward_Marshall_Resume.pdf"
                            target="_blank"
                            download
                            className="resume-link"
                        >
                        Download My Resume
                        </Link>
                        <br />
                        <Link to="/contact">
                            Contact
                        </Link>
                    </h2>
                </div>

                <div className="about-me-section-centerer">
                    <div className="about-me-section">
                        <p className="about-me-paragraph">
                            Hello. It is I. Edward. 
                        </p>

                        <p className="about-me-paragraph">
                            I am a Full-Stack web developer and here is the 
                            short list of what I can do: React | JavaScript | 
                            Redux | HTML | CSS | Ruby | Ruby on Rails | Mongoose
                            | MongoDB | Node.js | Express.js | SQL | PostgreSQL 
                            | jQuery | Git | Heroku | AWS
                        </p>

                        <p className="about-me-paragraph">
                            
                        </p>

                        <p className="about-me-paragraph">
                            I graduated Berklee College of Music in 2015 with 
                            a degree in music education and moved to NYC to be 
                            a musician and a music teacher. As a teacher I spent 
                            oodles of hours reflecting upon my lessons to 
                            understand how I can make the presentation more 
                            streamlined and more novel so I can keep the kiddos 
                            engaged, especially during remote teaching the past 
                            two years. I had a few ideas on small applications 
                            to create to teach a few and realized I can learn 
                            how to create them myself.
                        </p>

                        <p className="about-me-paragraph">
                            I look forward to talking to you about this 
                            opportunity. I also invite you to take a look at my projects below. 
                            Feel free to apply them to your own learning as well and
                            do let me know if you have any questions.
                        </p>
                    </div>
                </div>

                <div className="projects-centerer">
                    <ul className="projects-list">
                        <a href="https://eddymarshall.github.io/Voice_Leading_Visualizer/"
                            className="list-container">
                            <li>
                                <h4 className="project-header">Voice Leading Visualizer</h4>
                                <img src={voiceImage} alt="" className="list-image" />
                                <p className="project-info">
                                    A learning tool created using vanilla JavaScript,
                                    HTML5, and CSS to help students master voice
                                    leading (smooth transitions between chords) on
                                    the guitar.
                                </p>
                            </li>
                        </a>

                        <a href="https://chord-pro-generator.herokuapp.com/"
                            className="list-container">
                            <li>
                                <h4 className="project-header">Chord Pro Generator</h4>
                                <img src={generatorImage} alt="" className="list-image" />
                                <p className="project-info">
                                    A songwriting tool that provides songwriters with 
                                    a jumping off point to create their next hit single. 
                                    Built using React, Redux, MongoDB, Express, Node.js
                                </p>
                            </li>
                        </a>

                        <a href="https://conduitz.herokuapp.com/"
                            className="list-container">
                            <li>
                                <h4 className="project-header">Conduit</h4>
                                <img src={conduitImage} alt="" className="list-image" />
                                <p className="project-info">
                                    A clone of Medium.com. Built using React, Redux, 
                                    Ruby on Rails, AWS, HTML5, and CSS.
                                </p>
                            </li>
                        </a>

                    </ul>
                </div>

            </div>
        )
    }
}

export default Programming;