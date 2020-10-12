import React, {Component } from 'react';
import { Form, Button, Input, Header} from 'semantic-ui-react'

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
            pathname:`/main-page`
           })
    }

render(){
    return ( <div>

 <Header>Create an Account</Header>
 <Form onSubmit={(e) => {
     this.handleSignIn()
     this.handleClick()
 }
}
 >
     <Form.Group >
        <Form.Field width={4}
            label='First Name:'
            control={Input}
            name='firstName'
            type='text' 
            placeholder="First name..." 
            value={this.state.first_name} 
            onChange={this.handleFormChange}
         />
         
         <Form.Field width={4}
            label='Last Name:'
            control={Input}
            name='lastName'
            type='text' 
            placeholder="Last name..." 
            value={this.state.last_name} 
            onChange={this.handleFormChange}
         />  
     </Form.Group>

         <Form.Field width={4}
            label='Username:'
            control={Input}
            name='username'
            type='text' 
            placeholder="Enter username..." 
            value={this.state.username} 
            onChange={this.handleFormChange}
         />  

        <Form.Field width={4}
            label='Password:'
            control={Input}
            name='password'
            type='password' 
            placeholder="Enter Password..." 
            value={this.state.password} 
            onChange={this.handleFormChange}
         />  

        <Form.Field width={4}
            label='Email Address:'
            control={Input}
            name='email'
            type='text' 
            placeholder="Enter email address..." 
            value={this.state.email} 
            onChange={this.handleFormChange}
         /> 
  
            <div>{this.state.errorStatus}</div>
         <Button primary type="submit" >Click here to Register!</Button> 

 </Form>
    </div> 
    );
        }

    }
export default CreateProfile;