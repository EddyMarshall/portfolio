import React from 'react';
import { Link } from 'react-router-dom'
import voiceImage from '../../styles/assets/VLV.png';
import conduitImage from '../../styles/assets/Conduit.png';
import generatorImage from '../../styles/assets/chord_pro_gen.png';
import personalImage from '../../styles/assets/personal.png';

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
                        <a href="https://eddymarshall.github.io/portfolio/Edward_Marshall_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
                            View My Resume</a>
                        
                        <br />
                        <Link to="/contact">
                            Contact
                        </Link>
                    </h2>
                </div>

                <div className="about-me-section-centerer">
                    <div className="about-me-section">

                        <p className="about-me-paragraph">
                            Hello! I am a Full-Stack web developer. In 2021 I graduated 
                            from <a className="app-link" target="_blank"
                                rel="noopener noreferrer" href="https://www.appacademy.io/">App Academy</a>, a 1000+
                            hour intensive coding bootcamp with an acceptance rate below 3%. Here is the 
                            short list of what I am proficient in: 
                        </p>

                        <p className="about-me-paragraph skills">
                            React | JavaScript |
                            Redux | HTML | CSS | Ruby | Ruby on Rails | Mongoose
                            | MongoDB | Node.js | Express.js | SQL | PostgreSQL
                            | jQuery | Git | Heroku | AWS
                        </p>

                        <p className="about-me-paragraph">
                            I graduated magna cum laude 
                            from <a className="app-link" target="_blank"
                                rel="noopener noreferrer" href="https://www.berklee.edu/">Berklee College of Music</a> in 2015 with a degree in music education and moved to NYC to be
                            a musician and a music teacher. As a teacher I devoted 
                            countless hours to reflecting upon and refining my lesson 
                            plans. I developed methods to keep my students 
                            engaged, especially during remote teaching the past 
                            two years. That led to several ideas for small educational 
                            applications and I soon realized that I could learn 
                            to create them myself. 
                        </p>

                        <p className="about-me-paragraph">
                            You can see a few of these ideas in addition to 
                            some other projects below. Feel free to apply them 
                            to your own learning as well and do let me know if 
                            you have any questions. I look forward to hearing
                            your story and talking to you about mine.
                        </p>
                    </div>
                </div>

                <div className="projects-centerer">
                    <ul className="projects-list">
                        
                            <li className="list-container">
                                <h4 className="project-header">Voice Leading Visualizer</h4>
                                <img src={voiceImage} alt="" className="list-image" />
                                <p className="project-info">
                                    A learning tool created using vanilla JavaScript,
                                    HTML5, and CSS to help students master voice
                                    leading (smooth transitions between chords) on
                                    the guitar.
                                </p>
                                <div className="repo-link-centerer">
                                    <a target="_blank"
                                        rel="noopener noreferrer" href="https://github.com/EddyMarshall/Voice_Leading_Visualizer"
                                        className="repo-link">Link To Repo</a>
                                </div>
                                <a href="https://eddymarshall.github.io/Voice_Leading_Visualizer/"
                                    className="cover-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                </a>
                            </li>

                        
                            <li className="list-container">
                                <h4 className="project-header">Personal Sites</h4>
                                <img src={personalImage} alt="" className="list-image" />
                                <p className="project-info">
                                    I build personal websites for bands, writers, 
                                    and solo musicians using React, HTML, and SCSS.
                                    It is a blast collaborating to convey their 
                                    specific art, vision and brand through a digital medium.
                                </p>
                            <a href="https://eddymarshall.github.io/Tallie_Gabriel/"
                                className="cover-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            </a>
                            </li>

                        
                            <li className="list-container">
                                <h4 className="project-header">Chord Pro Generator</h4>
                                <img src={generatorImage} alt="" className="list-image" />
                                <p className="project-info">
                                    A songwriting tool that provides songwriters with 
                                    a jumping off point to create their next hit single. 
                                    Built using React, Redux, MongoDB, Express, Node.js
                                </p>
                                <div className="repo-link-centerer">
                                    <a target="_blank"
                                        rel="noopener noreferrer" href="https://github.com/EddyMarshall/Chord_Pro_Generator"
                                        className="repo-link">Link To Repo</a>
                                </div>
                            <a href="https://chord-pro-generator.herokuapp.com/"
                                className="cover-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            ></a>
                            </li>
                        
                        
                            <li className="list-container">
                                <h4 className="project-header">Conduit</h4>
                                <img src={conduitImage} alt="" className="list-image" />
                                <p className="project-info">
                                    A clone of Medium.com. Built using React, Redux, 
                                    Ruby on Rails, AWS, HTML5, and CSS.
                                </p>
                                <div className="repo-link-centerer">
                                    <a href="https://github.com/EddyMarshall/Conduit" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="repo-link">Link To Repo</a>
                                </div>
                                <a href="https://conduitz.herokuapp.com/" 
                                    className="cover-link"
                                    target="_blank"
                                    rel="noopener noreferrer"></a>
                            </li>

                    </ul>
                </div>

            </div>
        )
    }
}

export default Programming;