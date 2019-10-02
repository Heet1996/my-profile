import React from 'react';
import {Route,Switch} from 'react-router';

import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Home from './components/Home/Home';
import Connect from './components/Connect/Connect';
import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends React.Component{

  render() {
    return(
    <div className="App">
      <Layout>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/connect' component={Connect}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Layout>
    </div>
    );
  };
}

export default App;
