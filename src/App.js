import React, { Component } from "react";

import {SignupProvider} from './contexts/SignupContext';
import SignupPage from './pages/SignupPage';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Upgrade challenge</h1>
        </header>
        
        <SignupProvider>
          <SignupPage />
        </SignupProvider>
          
      </div>
    );
  }
}

export default App;
