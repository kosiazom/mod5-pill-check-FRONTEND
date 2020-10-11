import React, {Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react'

const userURL = "http://localhost:3000/api/v1/users"

class CreateProfile extends Component {

    state = { 
        firstName: " ",
        lastName: " ",
        username: " ",
        password: " ",
        email: " ",
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
                firstName: e.target.value})
        }
        else if(e.target.name === "lastName") {
            this.setState({
                lastName: e.target.value})
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
    if(firstName.length === 0) {
       this.setState({errorStatus: "First Name cannot be blank!"})
    }
    else if (lastName.length === 0) {
        this.setState({errorStatus: "Last Name cannot be blank!"})
    }
   else if (username.length === 0) {
        this.setState({errorStatus: "Username cannot be blank!"})
    }
    else if (password.length === 0) {
        this.setState({errorStatus: "Password cannot be blank!"})
    }
    else if (email.length === 0) {
        this.setState({errorStatus: "Email cannot be blank!"})
    }

   
        fetch(userURL, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                firstName:  this.state.firstName,
                lastName:  this.state.lastName,
                username:  this.state.username,
                password:  this.state.password,
                email:     this.state.email
                 })
        })
        .then( res => res.json() )
        .then( userInfo => {
            localStorage.token = userInfo.token
            localStorage.username = userInfo.username
        } )
   


render(){
//     return ( <div>

//  Create an Account
//  <Form onSubmit={() => handleSignIn()}>
//      <Form.Group widths='equal'>
//         <Form.Field
//             label='First Name:'
//             control={Input}
//             name='firstName'
//             type='text' 
//             placeholder="First name..." 
//             value={this.state.firstName} 
//             onChange={handleFormChange}
//          />
         
//          <Form.Field
//             label='Last Name:'
//             control={Input}
//             name='lastName'
//             type='text' 
//             placeholder="Last name..." 
//             value={this.state.lastName} 
//             onChange={handleFormChange}
//          />  
//      </Form.Group>

//          <Form.Field
//             label='Username:'
//             control={Input}
//             name='username'
//             type='text' 
//             placeholder="Enter username..." 
//             value={this.state.username} 
//             onChange={handleFormChange}
//          />  

//         <Form.Field
//             label='Password:'
//             control={Input}
//             name='password'
//             type='password' 
//             placeholder="Enter Password..." 
//             value={this.state.password} 
//             onChange={handleFormChange}
//          />  

//         <Form.Field
//             label='Email Address:'
//             control={Input}
//             name='email'
//             type='text' 
//             placeholder="Enter email address..." 
//             value={this.state.email} 
//             onChange={handleFormChange}
//          /> 

//          <Button primary type="submit">Click here to Register!</Button> 

//  </Form>
//     </div> 
//     );
        }

    }
export default CreateProfile;