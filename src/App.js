import React, { Component } from "react";
import { Route } from 'wouter';

import {SignupProvider} from './contexts/SignupContext';
import SignupPage from './pages/SignupPage';
import MoreInfoPage from './pages/MoreInfoPage';
import ConfirmationPage from './pages/ConfirmationPage';
import SuccessPage from './pages/SuccessPage';
import ErrorPage from './pages/ErrorPage';

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
          <Route path="/confirmation" component={ConfirmationPage} />
          <Route path="/success" component={SuccessPage} />
          <Route path="/error" component={ErrorPage} />
        </SignupProvider>
      </>
    );
  }
}

export default App;
