import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Login from './components/Login';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
    <Nav />

      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/Services" component={Services} exact/>
        <Route path="/Login" component={Login} exact/>
        <Route path="/Contact" component={Contact} exact/>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
