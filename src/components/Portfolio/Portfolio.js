import React,{useState} from 'react';
import {Link,Route} from 'react-router-dom';
import './Portfolio.scss';

const topics = [
    {
      name: 'React-JS',
      id: 'React',
      projects: [
        {
          name: 'Burger Builder',
          id: 'burger-builder',
          description: "Order your customize burger",
          technology:["React","React-Redux","Axios"],
          code: 'https://github.com/Heet1996/BurgerBuilder',
          link:'https://react-burgerbuilder-a3bac.web.app/'
        },
        {
            name: 'Git Finder',
            id: 'git-finder',
            description: "A GraphQL client application to search, star and watch your favourite repository",
            technology:["React","React-Redux","GraphQL"],
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
          technology:["NodeJS","ExpressJS","Socket.io"],
          code: 'https://github.com/Heet1996/node-chat-api',
          url:'https://sheltered-taiga-76776.herokuapp.com/'
        },
        {
          name: 'Online Shopping',
          id: 'onlineshopping',
          description: 'An online shopping cart integrated with stripe for payment',
          technology:["NodeJS","EJS","Stripe API"],
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
  let [pro,setPro]=useState('React');  
  let Project=({match})=>{

    let proId=match.params.id || 'React';
    setPro(proId);
    let project=topics.find(({id})=>id==proId);
    return project['projects']
                .map((el)=>{
                  return (<div className="flip-card" key={el.id}>
                            
                                <div className="flip-card-front">
                                    <h3 className="card-title">{el.name}</h3>
                                    <p className="card-description">{el.description}</p>
                                    <p>
                                      {el.technology.map((item)=><span>{item+', '}</span>)}
                                    </p>
                                    <div className="flip-card-btnDiv">
                                    <a href={el.code} target="_blank">Code</a>
                                    <a href={el.url} target="_blank">View Site</a>
                                    </div>
                                </div>
                                
                             
                          </div>)
                })
  }
  let nav=(topics.map(({name,id})=>{
    
    return (<li key={id} className={`navigation-1__item ${pro==id ? 'active' :null}`}>
        <Link to={`/portfolio/${id}`} className={`navigation-1__link`}>{name}</Link> 
    </li>)
  }));
    let container=(
              <div className="project">
                <nav className="navigation-1">
                      <ul className="navigation-1__list">
                        {nav}    
                      </ul>
                </nav>
                <div className="projects">
                      <Route path='/portfolio/:id' component={Project}></Route>
                      <Route exact path='/portfolio' component={Project}></Route>
                </div>
              </div>
              ) 
              return container;   
            

}

export default Portfolio;