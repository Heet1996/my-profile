import React from 'react';
import './About.scss';

let About=(props)=>(
    <div className="about">
            <div className="about-section">
                <div className="about-section__desc">
                <p>Hi, I'm Heet Shah.</p>
                <p>I'm a Freelance JavaScript Developer and formerly an Automation Test Engineer at Barclays and was a Full Stack Web Developer at Ascent Future Tech. 
                I've completed my Bachelors in Computer Science from VJTI, Mumbai in 2018 and started Web programming during my college days.
                </p>
                <p>
                I'm passionate about learning the latest and greatest technologies, whether that's the front-end or back-end.    
                </p>
                <p>
                 I also enjoy watching Sitcom  TV series and "The Office" is my all time favorite. Please <a href="/connect" style={{textTransform:"uppercase"}}>contact me</a> if you would like to work on a project together, or just want to chat          
                </p>
                </div>
            </div>
    </div>
    )
;

export default About;