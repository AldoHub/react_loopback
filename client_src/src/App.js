import React, { Component } from 'react';

//import the components
import Routes from "./components/routes"; 
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
       
      </div>
    );
  }
}

export default App;
