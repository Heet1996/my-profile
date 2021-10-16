import React from 'react';
import './Experience.scss';
import Pdf from '../../Heet_Shah_Resume_New.pdf';

const experience1 = [
    {
        header:"GoDutch, Software Engineer",
        period:"Feb 2021 - Present",
        description:["Working as a back-end engineer to build out new features and improve the performance of existing ones."],
        technologies:["NodeJS", "AWS (Lambda, RDS, DynamoDB, API Gateway, EC2)", "MySQL"]
    },
    {
        header:"Barclays, Automation Test Engineer",
        period:"Aug 2018 - May 2020",
        description:["Worked with Payment Sanction team, migrated old data-driven framework to BDD framework.Designed test plans, scenarios, scripts and procedures."],
        technologies:["Java", "Selenium", "MySQL", "Jenkins"]
    },
]

const experience2 = [
    {
        header:"MakeStories, Software Engineer",
        period:"May 2020 - Feb 2021",
        description:["Worked as a full-stack javascript engineer at MakeStories and with client (Network 18).","Built a realtime-collabartion and a SDK to integrate comments feature"],
        technologies:["React", "Redux", "NodeJS", "Socket.io", "NextJS"]
    },
    {
        header:"Ascent FutureTech, Web Developer Intern",
        period:"Mar 2018 - May 2018",
        description:["Worked as a full-stack web developer intern at Ascent. Developed a policy management portal and pricing page according to geo-location"],
        technologies:["AngularJS", "PHP", "MySQL"]
    }
]

let ExperienceArea = ({experience})=>{
    let {header = "", period = "", description = [], technologies = []} = experience;
    technologies = technologies.join(', ');
    return (
        <div>
            <h2 className="header">{header}</h2>
            <h4>{period}</h4>
            <div className="description">
            {description.map((value, index)=>(<p className="description-text" key={index}>{value}</p>))}
            <p><b>Technologies:</b> {technologies}</p>
            </div>
        </div>
    )
}

let Experience=(props)=>(
    <div className="experience">
        <div className="experience-area">
                <div className="experience-area__box">
                    <ul>
                        {experience1.map((experience)=>(<li><ExperienceArea experience={experience}></ExperienceArea></li>))}
                    </ul>
                </div>
                 <div className="border"></div>
                <div className="experience-area__box">
                <ul>
                    {experience2.map((experience)=>(<li><ExperienceArea experience={experience}></ExperienceArea></li>))}
                </ul>
                </div>
        </div>
        <a href={Pdf} target="_blank" rel="noopener noreferrer"><button className="button button--ujarak button--border-thin button--text-thick button--inverted">Resume</button></a>
    </div>
)

export default Experience;