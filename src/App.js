import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio';
import About from './components/about';
import Contact from './components/contact';
import styles from './styles/about.css';
import Homepage from './components/homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
