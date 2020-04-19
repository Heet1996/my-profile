import React from 'react';
import './Skills.scss';
import Pdf from '../../Heet_Shah_New_Resume.pdf';
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
                                <li>WordPress</li>
                                <li>GraphQL</li>
                            </ul>
                        </div>
                        <div className="border"></div>
                        <div className="skills-area__box">
                            <h4>EXPERIENCE WITH</h4>
                            <ul>
                                <li>Angular JS</li>
                                <li>PHP</li>
                                <li>Selenium</li>
                                <li>Java</li>
                                <li>Bootstrap</li> 
                                <li>CSS3/SASS</li>
                            </ul>
                        </div>
                </div>
               <a href={Pdf} target="_blank"><button className="button button--ujarak button--border-thin button--text-thick button--inverted">Resume</button></a>
            </div>
)

export default Skills;