import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import  {Home, Contact } from './App.jsx';
import About from './about';

const routes = (
    <BrowserRouter>
       <App>
          <Route path = "/" exact component = {Home} />
          <Route path ="/about" component = {About} />
          <Route path = "/" component = {Contact} />
       </App>
    </BrowserRouter>
 )

ReactDOM.render((
   <BrowserRouter>
       <App>
           
       </App>
   </BrowserRouter>), document.getElementById('root'))