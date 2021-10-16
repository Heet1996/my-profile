import React from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';

import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Home from './components/Home/Home';
import Connect from './components/Connect/Connect';
import Layout from './hoc/Layout/Layout';
import './App.scss'

class App extends React.Component{

  render() {
    return(
      <Router>
        <main className="container">
          <Layout>
            <Switch>
              <Route path='/about' component={About}></Route>
              <Route path='/skills' component={Skills}></Route>
              <Route path='/portfolio' component={Portfolio}></Route>
              <Route path='/work-experience' component={Experience}></Route>
              <Route path='/connect' component={Connect}></Route>
              <Route exact path='/' component={Home}></Route>
            </Switch>
          </Layout>
          </main>
    </Router>
    );
  };
}

export default App;
