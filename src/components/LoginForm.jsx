import React, { Component } from 'react'
import { Form, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const loginURL = "http://localhost:3000/api/v1/login"

class LoginForm extends Component {
   
//    possibly use hooks here
    state = {  
        username: '',
        password: ''
    }


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

    // submitHandler = (e) => {
    //     e.preventDefault()

       
    // }

    handleLogin = (e) => {
        // debugger
        e.preventDefault()
        if(this.state.username.length === 0){
            this.setState({
                errorStatus: "Username cannot be blank!"
            })
        } else if( this.state.password.length === 0){
            this.setState({
                errorStatus: "Password cannot be blank!"
            })
        } else{

        fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }, 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json() )
        .then( userInfo => { 
            localStorage.token = userInfo.token
            localStorage.username = userInfo.username
            localStorage.id = userInfo.id
            console.log(userInfo)
        
        })
        }
    }

    render() { 
        return ( 
            <div>
                <h3>Please Log in!</h3>
                <Form onSubmit={(e) => this.handleLogin(e)} >
                    <Form.Field>
                        <input name='username' type='text'placeholder="Username..." value={this.state.username} onChange={this.handleOnChange}/>
                    </Form.Field>
                    <Form.Field>
                        <input name='password' type='password' placeholder="Password..." value={this.state.password} onChange={this.handleOnChange}/>
                    </Form.Field>
                    <div>{this.state.errorStatus}</div>
                    <Button primary type="submit">Log In</Button>
                </Form>
                <br />
                <Link to='/create-user-profile'><p>Not a user? Create an account!</p></Link>
            </div>
         );
    }
}
 
export default LoginForm;