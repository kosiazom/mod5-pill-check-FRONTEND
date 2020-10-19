import React, { Component } from 'react'
import { Form, Button, Grid, Header, Image, Message, Segment, Icon} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../login.css'



class LoginForm extends Component {
   
//    possibly use hooks here
    



    handleClick = () =>{
        this.props.history.push({
            pathname:`/main-page`
           })
    }

    

    render() { 
        return ( 
            <div>
        
            <div className="home-picture">
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='olive' textAlign='center'>
                <Image src={require("../images/pillcheck-logo.png")}/> Log-in to your account
            </Header>

            <Form size='large' onSubmit={(e) =>{
                this.handleClick()
                this.props.handleLogin(e) }} >
                <Segment stacked>
                <Form.Input 
                fluid 
                icon='user'
                iconPosition='left' 
                name='username'
                placeholder='Username' 
                type='text'
                // value={this.state.username} 
                // onChange={this.handleOnChange}
                />

                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name='password'
                    placeholder='Password'
                    type='password'
                    // value={this.state.password} 
                    // onChange={this.handleOnChange}
                />

                <Button color='olive' fluid size='large' >
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
               

            </div>
         );
    }
}
 
export default LoginForm;