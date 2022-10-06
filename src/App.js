import React, { Component } from "react";
import { Route } from 'wouter';

import {SignupProvider} from './contexts/SignupContext';
import SignupPage from './pages/SignupPage';
import MoreInfoPage from './pages/MoreInfoPage';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <h1>Welcome to Upgrade challenge</h1>
        </header>

        <SignupProvider>
          <Route path="/" component={SignupPage} />
          <Route path="/more-info" component={MoreInfoPage} />
        </SignupProvider>
      </>
    );
  }
}

export default App;
