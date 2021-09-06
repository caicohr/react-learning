import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import  {Home, About, Contact } from './App.jsx';
import App from './App.jsx';
import { createBrowserHistory } from "history";

ReactDOM.render((
    <Router history = {createBrowserHistory()}>
       <Route path = "/" component = {App}>
          <Route path ="/" exact component = {Home} />
          <Route path = "home" component = {Home} />
          <Route path = "about" component = {About} />
          <Route path = "contact" component = {Contact} />
       </Route>
    </Router>
 ), document.getElementById('root'))