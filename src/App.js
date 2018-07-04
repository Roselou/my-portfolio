import React, { Component } from 'react';
import './App.css';
import './styles/about.css';
import MediaQuery from 'react-responsive';





class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="min-device-width: 1224px">
          <div className="App">
            
        
            
          </div>
          </MediaQuery>
      </div>
    );
  }
}

export default App;
