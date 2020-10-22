import React, {Component } from 'react';
import { Form, Button, Input, Header} from 'semantic-ui-react'
import QuestionnaireForm from './QuestionnaireForm'
import '../profile.css'

const userURL = "http://localhost:3000/api/v1/users"

class CreateProfile extends Component {

    state = { 
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: "",
        currentUser: {}
    }

//     const [firstName, setFirstName] = useState(" ");  
//     const [lastName, setLastName] = useState(" ");
//     const [username, setUsername] = useState(" ");
//     const [password, setPassword] = useState(" ");
//     const [email, setEmail] = useState(" ");
//     const [errorStatus, setErrorStatus] = useState( " ")
    
 handleFormChange = (e) => {
        e.preventDefault()
        if (e.target.name === "firstName") {
            this.setState({
                first_name: e.target.value})
        }
        else if(e.target.name === "lastName") {
            this.setState({
                last_name: e.target.value})
        }
        else if(e.target.name === "username") {
            this.setState({
                username: e.target.value})
        }
         else if(e.target.name === "password") {
            this.setState({
                password: e.target.value})
        }
        else if(e.target.name === "email") {
            this.setState({
                email: e.target.value})
    }
}

 handleSignIn = () => {
    if(this.state.first_name.length === 0) {
       this.setState({errorStatus: "First Name cannot be blank!"})
    }
    else if (this.state.last_name.length === 0) {
        this.setState({errorStatus: "Last Name cannot be blank!"})
    }
   else if (this.state.username.length === 0) {
        this.setState({errorStatus: "Username cannot be blank!"})
    }
    else if (this.state.password.length === 0) {
        this.setState({errorStatus: "Password cannot be blank!"})
    }
    else if (this.state.email.length === 0) {
        this.setState({errorStatus: "Email cannot be blank!"})
    }

    fetch(userURL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                user: {
                    first_name:  this.state.first_name,
                    last_name:  this.state.last_name,
                    username:  this.state.username,
                    password:  this.state.password,
                    email:     this.state.email
                }
              
                 })
        })
        .then( res => res.json() )
        .then( userInfo => {
            localStorage.token = userInfo.token
            localStorage.username = userInfo.username
            localStorage.userID = userInfo.id
          
            console.log(userInfo)
        } )
    }

    handleClick = () =>{
        this.props.history.push({
            pathname:`/questions`
           })
    }

render(){
    return ( 
    
<>
        
        <div className="background-picture">
           
                <div className="container">
                  <div className="form-center">
            <h1>Create Your Profile</h1>
            <form onSubmit={() =>{ this.handleSignIn()
                                  this.handleClick()}}>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" required name="firstName" value={this.state.first_name} onChange={this.handleFormChange} placeholder="First Name" />
                        <div className="underline"></div>
                    </div>
                    <div className="input-data">
                        <input type="text" required name="lastName" value={this.state.last_name} onChange={this.handleFormChange} placeholder="Last Name"/>
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text"  required name="username" value={this.state.username} onChange={this.handleFormChange} placeholder="Username"/>
                        <div className="underline"></div>
                    </div>
                    <div className="input-data">
                        <input type="password"  required name="password" value={this.state.password} onChange={this.handleFormChange} placeholder="Password"/>
                        <div className="underline"></div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text"  required name="email" value={this.state.email} onChange={this.handleFormChange} placeholder="Enter Email Address..."/>
                        <div className="underline"></div>
                    </div>
                </div>
                <Button type="submit" style={{background: "#b4b596"}}>Click here to Register!</Button> 
                
            </form>
            </div>
        </div>
        </div>
        </>
    );
        }

    }
export default CreateProfile;

{/*  */}
