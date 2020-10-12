import React, { Component } from 'react'
import { Form, Button, Grid, Header, Image, Message, Segment, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const loginURL = "http://localhost:3000/api/v1/login"

class LoginForm extends Component {
   
//    possibly use hooks here
    state = {  
        username: "",
        password: ""
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

    handleClick = () =>{
        this.props.history.push({
            pathname:`/main-page`
           })
    }

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
        e.target.reset()
        }
    }

    render() { 
        return ( 
            <div>

        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src={require("../images/pillcheck-logo.png")}/> Log-in to your account
            </Header>

            <Form size='large' onSubmit={(e) => this.handleLogin(e)} >
                <Segment stacked>
                <Form.Input 
                fluid 
                icon='user'
                iconPosition='left' 
                name='username'
                placeholder='Username' 
                type='text'
                value={this.state.username} 
                onChange={this.handleOnChange}
                />

                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name='password'
                    placeholder='Password'
                    type='password'
                    value={this.state.password} 
                    onChange={this.handleOnChange}
                />

                <Button color='teal' fluid size='large' onClick={this.handleClick}>
                    Login
                </Button>
                </Segment>
            </Form>
            <Message>
                New to Pillcheck? <Link to='/create-user-profile'>Create an account!</Link>
            </Message>
            </Grid.Column>
        </Grid>
                {/* <h3>Please Log in!</h3>
                <Form onSubmit={(e) => this.handleLogin(e)} >
                    <Form.Field width={4} >
                        <label>Username</label>
                        <input name='username' type='text'placeholder="Username..." value={this.state.username} onChange={this.handleOnChange}/>
                    </Form.Field>
                    <Form.Field width={4}>
                    <label>Password</label>
                        <input name='password' type='password' placeholder="Password..." value={this.state.password} onChange={this.handleOnChange}/>
                    </Form.Field>
                    <div>{this.state.errorStatus}</div>
                    <Button primary type="submit">Log In</Button>
                </Form>
                <br />
                <Link to='/create-user-profile'><p>Not a user? Create an account!</p></Link> */}
            </div>
         );
    }
}
 
export default LoginForm;