import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

class App extends React.Component {
   render() {
      return (
         <div>
            <Route path ="/" exact component = {Home} />
            <Route path = "/" component = {About} />
            <Route component = {Contact} />
         </div>
      )
   }
}
export default App;


export class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}
//export default Home;

export class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}
//export default About;

export class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}
//export default Contact;