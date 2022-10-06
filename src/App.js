import React, { Component } from "react";
import { Route } from 'wouter';

import LoaderComponent from './components/Loader';

import { SignupContext, SignupProvider } from './contexts/SignupContext';
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
          <AppWrapper />
        </SignupProvider>
      </>
    );
  }
}

function AppWrapper() {
  const { 
    isLoading,
  } = React.useContext(SignupContext);

  return (
    <>
      { isLoading &&
        <LoaderComponent />
      }

      <Route path="/" component={SignupPage} />
      <Route path="/more-info" component={MoreInfoPage} />
      <Route path="/confirmation" component={ConfirmationPage} />
      <Route path="/success" component={SuccessPage} />
      <Route path="/error" component={ErrorPage} />
    </>
  )
}

export default App;
