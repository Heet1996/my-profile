import React from 'react';
import './Home.scss';

let Home=(props)=>(
    
    <div className="home"> 
       
            <div className="profile-image">
                <img src={require('../../boby_hill.jpg')} alt="My Profile"/>
            </div>
            <div className="social-network">
                <a href="https://www.linkedin.com/in/heet1996" target="_blank" rel="noopener noreferrer">
                <img src={require('../../icons/linkedin.svg')} alt="Linked" />    
                </a> 
                <a href="https://www.facebook.com/heetshah1996" target="_blank" rel="noopener noreferrer">
                <img src={require('../../icons/facebook.svg')} alt="FaceBook" />    
                </a>    
                <a href="https://github.com/Heet1996" target="_blank" rel="noopener noreferrer">
                    <img src={require('../../icons/github.svg')} alt="GitHub" />
                </a>  
                <a href="https://twitter.com/heet907" target="_blank" rel="noopener noreferrer"> 
                    <img src={require('../../icons/twitter.svg')} alt="face" />
                </a> 
        
            </div>
       
        <div className="intro">
            <ul className="intro__list">
                <li className="intro__list__item">
                    <div id="greeting" className="intro__greeting"></div>
                </li>
                <li className="intro__list__item">
                    <div id="intro" className="intro__intro"></div>
                </li>
                <li className="intro__list__item">
                    <div id="connect" className="intro__connect"></div>
                </li>
            </ul>
        </div>
    </div>
)
let dynamicCreate=(id,content)=>{
    
    let i=0;
    if(document.getElementById(id))
    document.getElementById(id).innerHTML="";
    let typeWriter=()=>{

        if(i<content.length && document.getElementById(id))
        {
            document.getElementById(id).innerHTML += content.charAt(i++);
            setTimeout(typeWriter, 50);
        }
    } 
    typeWriter();

    
}

export let typeString=()=>{
    
    setTimeout(dynamicCreate.bind(this,"greeting","Hi there!"),1000);
    setTimeout(dynamicCreate.bind(this,"intro","I'm Heet, a JavaScript Developer living in Mumbai, India."),2000);
    setTimeout(dynamicCreate.bind(this,"connect","Let's get in touch"),5000);
}

document.addEventListener('DOMContentLoaded',()=>{

    typeString();
});
export default Home;