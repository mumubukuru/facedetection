import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
// import ReactDOM from 'react-dom';
import Navigation from './Components/Navigation/Navigation';
// import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'a439491bd9b84c1eb3667aa6290b6edc'
});

const particlesOptions = { particles: {
  line_linked: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      }
   }
  }
 }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
  
  onInputChange = (event) => {
    console.log(event.target.value); // Get input from value
  }

  onSubmit = () => {
    console.log('click');
    app.models.predict("a439491bd9b84c1eb3667aa6290b6edc", "https://samples.clarifai.com/face-det.jpg").then(
      function(response) {
        console.log(response);
      },
      function(err) {

      }
    )
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
              params={{particlesOptions}}
            />
        <Navigation />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onSubmit}
        />
        {/* <Logo /> */}
        {/* <FaceRecog /> */}
      </div>
    );
}
}

export default App;
