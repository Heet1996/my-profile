import React from 'react';
import {Link} from 'react-router-dom';
import './Portfolio.scss';
const topics = [
    {
      name: 'React-JS',
      id: 'React',
      projects: [
        {
          name: 'Burger Builder',
          id: 'burger-builder',
          description: "A react-redux application where you can order your customize builder",
          technology:["React","React-Redux","Axios","Firebase Database","Firebase host"],
          code: 'https://github.com/Heet1996/BurgerBuilder',
          link:'https://react-burgerbuilder-a3bac.web.app/'
        },
        {
            name: 'Git Finder',
            id: 'git-finder',
            description: "A GraphQL client application to search, star and watch your favourite repository",
            technology:["React","React-Redux","GraphQL","Firebase host","React-Router"],
            code: 'https://github.com/Heet1996/GitHubApi',
            link:'https://githubrepo-cc932.firebaseapp.com/'
          },
      ]
    },
    {
      name: 'CSS3',
      id: 'Css',
      projects: [
        {
          name: 'Natours',
          id: 'natours',
          description: "Landing Page build using CSS3 animation and other techniques",
          technology:["HTML","SCSS","CSS3"],
          code:"https://github.com/Heet1996/Natour",
          url: 'https://natoursproject.firebaseapp.com/'
        },
        {
          name: 'Trillo',
          id: 'trillo',
          description: "Landing Page build using flexbox",
          technology:["HTML","SCSS","CSS3"],
          code:'https://github.com/Heet1996/Trillo',
          url: 'https://github.com/Heet1996/Trillo'
        }
      ]
    },
    {
      name: 'Node-JS',
      id: 'Nodejs',
      projects: [
        {
          name: 'Chat Room',
          id: 'chatroom',
          description: 'User can creat or join a chat room and send their location',
          technology:["NodeJS","ExpressJS","Socket.io","Google Maps API"],
          code: 'https://github.com/Heet1996/node-chat-api',
          url:'https://sheltered-taiga-76776.herokuapp.com/'
        },
        {
          name: 'Online Shopping',
          id: 'onlineshopping',
          description: 'An online shopping cart integrated with stripe for payment',
          technology:["NodeJS","ExpressJS","EJS","Stripe API"],
          code: 'https://github.com/Heet1996/NodeJS',
          url:'https://github.com/Heet1996/NodeJS'
        }
      ]
    },
    {
        name: 'Vanilla-JS',
        id: 'Vanillajs',
        projects: [
          {
            name: 'Forkify',
            id: 'forkify',
            description: 'An online shopping cart integrated with stripe for payment',
            technology:["JavaScript","DOM API","Axios"],
            code: 'https://github.com/Heet1996/Forkify',
            url:'https://github.com/Heet1996/Forkify'
          },
          {
            name: 'Budget App',
            id: 'budgetapp',
            description: 'An online shopping cart integrated with stripe for payment',
            technology:["JavaScript","DOM API","Axios"],
            code: 'https://github.com/Heet1996/NodeJS',
            url:'https://github.com/Heet1996/NodeJS'
          }
        ]
      }
  ]
let Portfolio=(props)=>{
  
  
  let nav=(topics.map(({name,id})=>{
    return (<li key={id} className="navigation-1__item">
        <Link to={`/project/${id}`} className="navigation-1__link">{name}</Link> 
    </li>)
  }));
  let projectsList=(
    <>
    <div className="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                
            </div>
            <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
            </div>
        </div>   
    </div>
    <div className="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                
            </div>
            <div class="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
            </div>
        </div>   
    </div>
  </>
  );

  let container=(
              <div className="project">
                <Route  />
                <nav className="navigation-1">
                      <ul className="navigation-1__list">
                        {nav}    
                      </ul>
                </nav>
                <div className="projects">
                        {projectsList}
                </div>
              </div>
              ) 
              return container;   
            

}

export default Portfolio;