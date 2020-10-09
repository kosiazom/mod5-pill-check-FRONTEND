import React from 'react';
import Head from './components/Head'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import CreateProfile from './components/CreateProfile';

class App extends React.Component {







  render() {
  return (
    <BrowserRouter >
      <Head/>
      <Switch >
  <Route path="/login" render={(routerProps) => <LoginForm {...routerProps}/>}/>
 
  <Route path="/create-user-profile" render={(routerProps) => <CreateProfile {...routerProps}/>}/>
       
      






















      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
}

export default App;
