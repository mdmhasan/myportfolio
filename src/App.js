import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/project' component={Work}/>
      <Route exact path='/contact' component={Contact}/>
    </Switch>
    </>
  );
}

export default App;
