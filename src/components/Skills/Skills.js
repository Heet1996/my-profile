import React from 'react';
import './Skills.scss';
import Pdf from '../../Heet_Shah_Resume_New.pdf';
let Skills=(props)=>(
            <div className="skills">
                <h3 className="skills-h3">Technology Skills</h3>
                <div className="skills-area">
                        <div className="skills-area__box">
                            <h4>DAY-TO-DAY COMFORT</h4>
                            <ul>
                                <li>React JS</li>
                                <li>React-Redux</li>
                                <li>JavaScript ES6</li>
                                <li>Node JS</li>
                                <li>AWS</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className="border"></div>
                        <div className="skills-area__box">
                            <h4>EXPERIENCE WITH</h4>
                            <ul>
                                <li>Socket.io</li>
                                <li>MongoDB</li>
                                <li>Selenium</li>   
                                <li>Java</li>
                                <li>Firebase</li> 
                                <li>CSS3/SASS</li>
                            </ul>
                        </div>
                </div>
               <a href="/portfolio" rel="noopener noreferrer"><button className="button">Projects</button></a>
            </div>
)

export default Skills;