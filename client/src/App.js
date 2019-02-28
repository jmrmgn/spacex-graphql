import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import NavBar from './components/Layout/NavBar';
import Launches from './components/Launches/Launches';
import Launch from './components/Launches/Launch';
import Rockets from './components/Rockets/Rockets';

import logo from './logo.jpg';
import './App.css';

const client = new ApolloClient({
   uri: 'http://localhost:5000/graphql'
});

class App extends Component {
   render() {
      return (
         <ApolloProvider client={client}>
            <Router>
               <div className="container">
                  <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
                  <NavBar />
                  <Route exact path="/" component={Launches} />
                  <Route exact path="/launch/:flight_number" component={Launch} />
                  <Route exact path="/rockets" component={Rockets} />                  
               </div>
            </Router>
         </ApolloProvider>
      );
   }
}

export default App;