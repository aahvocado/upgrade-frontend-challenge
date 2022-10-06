import React, { Component } from "react";
import { Route } from 'wouter';

import {SignupProvider} from './contexts/SignupContext';
import SignupPage from './pages/SignupPage';
import MoreInfoPage from './pages/MoreInfoPage';

class App extends Component {
  render() {
    return (
      <div className='main-container'>
        <header>
          <h1>Welcome to Upgrade challenge</h1>
        </header>

        <SignupProvider>
          <Route path="/" component={SignupPage} />
          <Route path="/more-info" component={MoreInfoPage} />
        </SignupProvider>
          
      </div>
    );
  }
}

export default App;
