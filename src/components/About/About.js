import React from 'react';
import './About.scss';

let About=(props)=>(
    <div className="about">
            <div className="about-section">
                <div className="about-section__desc">
                <p>Hi, I'm Heet Shah.</p>
                <p>I'm a Freelance JavaScript Developer and formerly an Automation Test Engineer at Barclays and was a Full Stack Web Developer at Ascent Future Tech. 
                I've completed my Bachelors in Computer Science from VJTI, Mumbai in 2018 and my love to Web programming started during my college days.
                </p>
                <p>
                I spend most of my time working with JavaScript, CSS3, HTML5.  New and open source web technologies make me super excited and I can’t wait to see what is to come of the web in the next few years.
                </p>
                <p>
                 In free time I enjoy watching Sitcom TV series and "The Office" is my all time favorite. Please feel free to <a href="/connect" style={{textDecoration:"underline"}}>contact me</a> if you would like to work on a project together, or just want to chat          
                </p>
                </div>
            </div>
    </div>
    )
;

export default About;