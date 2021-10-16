import React from 'react';
import './About.scss';
import {Link} from 'react-router-dom';

let About=(props)=>(
    <div className="about">
            <div className="about-section">
                <div className="about-section__desc">
                <p>Hi, I'm Heet Shah.</p>
                <p>Currently I'm working as a Backend Engineer at <a href="http://godutchpay.in">GoDutch</a> and previously worked at <a href="https://beta.makestories.io/">MakeStories</a> as a Full Stack Developer. 
                I've completed my Bachelors in Computer Science from VJTI, Mumbai in 2018 and my love to Web programming started during my college days.
                </p>
                <p>
                I spend most of my time working with JavaScript frameworks.  New and open source web technologies make me super excited and I can’t wait to see what is to come of the web in the next few years.
                </p>
                <p>
                 In free time I enjoy watching Sitcom TV series and "The Office" is my all time favorite. Please feel free to <Link to="/connect" style={{textDecoration:"underline"}}>connect</Link> with me if you would like to work on a project together, or just want to chat          
                </p>
                <p></p>
                </div>
            </div>
    </div>
    )
;

export default About;