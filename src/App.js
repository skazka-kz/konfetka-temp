import React, { Component } from 'react';
import AppContainer from "./components/presentation/AppContainer";
import Header from "./components/logic/Header";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header/>
      </AppContainer>
    );
  }
}

export default App;
