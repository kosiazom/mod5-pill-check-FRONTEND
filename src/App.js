import React from 'react';
import Head from './components/Head'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import CreateProfile from './components/CreateProfile';
import MainContainer from './components/MainContainer';
import Home from './components/Home'
import QuestionnaireForm from './components/QuestionnaireForm'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

const loginURL = "http://localhost:3000/api/v1/login"

class App extends React.Component {
  state ={
    logged: false,
    currentUser: {},
    username: "",
    password: ""
   
  
  }


  // toggleLog = () => {
  //   this.setState({
  //     logged: !this.state.logged,
     
  //   })
  // }

  // componentDidMount() {
  //   if(localStorage.token) {
  //     this.setState({
  //       logged: !this.state.logged
  //     })
  //   }
  // }


  handleOnChange = (e) =>{
    if (e.target.name === 'username') {
        this.setState({
            username: e.target.value
        })

    }else if (e.target.name === 'password') {
        this.setState({
            password: e.target.value
        })
    }
}

handleLogin = (e) => {
  // debugger

  console.log(e.target.username.value)
  // e.preventDefault()
  // if(this.state.username.length === 0){
  //     this.setState({
  //         errorStatus: "Username cannot be blank!"
  //     })
  // } else if( this.state.password.length === 0){
  //     this.setState({
  //         errorStatus: "Password cannot be blank!"
  //     })
  // } else{

  fetch(loginURL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      }, 
      body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
      })
  })
  .then(res => res.json() )
  .then( userInfo => { this.setState({
    currentUser: userInfo,
    logged: true
  })
  localStorage.token = userInfo.token
  localStorage.username = userInfo.username
  localStorage.id = userInfo.id
  console.log(userInfo)
  
  })
  e.target.reset()
  
}



  render() {
  return (
    <BrowserRouter >
    
      
     {/* <Switch > */}
    <Route exact path="/" component={Home} />

  <Route path="/login" render={(routerProps) =>   <LoginForm {...routerProps} 
  handleLogin={this.handleLogin} 
  handleOnChange={this.handleOnChange}/> }/>
 
  <Route path="/create-user-profile" render={(routerProps) => <CreateProfile {...routerProps}/>}/>
  <Route path="/questions" render={(routerProps) => <QuestionnaireForm />} />

  <Route path="/main-page" render={(routerProps) => <MainContainer currentUser={this.state.currentUser}/>} />

{/* 
      </Switch> */}

     
    </BrowserRouter>
  );
}
}

export default App;
