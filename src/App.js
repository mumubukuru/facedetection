import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Navigation from './Components/Navigation/Navigation';
// import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageLinkForm />
        {/* <Logo /> */}
        {/* <FaceRecog /> */}
      </div>
    );
}
}

export default App;
