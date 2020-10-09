import React from 'react';
import Head from './components/Head'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css';

class App extends React.Component {







  render() {
  return (
    <BrowserRouter >
      <Head/>
      <Switch >
  <Route path="/login" render={(routerProps) => <LoginForm {...routerProps}/>}/>

       
      






















      </Switch>

      <Footer />
    </BrowserRouter>
  );
}
}

export default App;
