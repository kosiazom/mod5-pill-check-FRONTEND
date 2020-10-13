import React from 'react';
import Head from './components/Head'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import CreateProfile from './components/CreateProfile';
import MainContainer from './components/MainContainer';
import Home from './components/Home'

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'



class App extends React.Component {
  state ={
    logged: false
  }


  // toggleLog = () => {
  //   this.setState({
  //     logged: !this.state.logged
  //   })
  // }

  // componentDidMount() {
  //   if(localStorage.token) {
  //     this.setState({
  //       logged: !this.state.logged
  //     })
  //   }
  // }




  render() {
  return (
    <BrowserRouter >
    
      
     {/* <Switch > */}
    <Route exact path="/" component={Home} />

  <Route path="/login" render={(routerProps) =>   <LoginForm {...routerProps} /> }/>
 
  <Route path="/create-user-profile" render={(routerProps) => <CreateProfile {...routerProps}/>}/>
  {/* <Route path="/questions" render={(routerProps) => <QuestionnaireForm />} /> */}

  <Route path="/main-page" render={(routerProps) => <MainContainer />} />

{/* 
      </Switch> */}

     
    </BrowserRouter>
  );
}
}

export default App;
