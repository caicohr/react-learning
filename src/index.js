import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import  {Home, About, Contact } from './App.jsx';

//ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render((
   <BrowserRouter>
       <App>
           <Route path = "/" exact component = {Home}/>
           <Route path = "/" component = {About}/>
           <Route path = "/" component = {Contact}/>
       </App>
   </BrowserRouter>), document.getElementById('root'))