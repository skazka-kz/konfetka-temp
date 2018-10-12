import React, { Component } from 'react';
import AppContainer from "./components/presentation/AppContainer";
import Header from "./components/logic/Header";
import AboutSection from "./components/logic/AboutSection";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header/>
        <AboutSection/>
      </AppContainer>
    );
  }
}

export default App;
