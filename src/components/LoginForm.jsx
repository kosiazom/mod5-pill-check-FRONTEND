import React from 'react'
import { Form, Button } from 'semantic-ui-react'


class LoginForm extends Component {
   
   
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


    render() { 
        return ( 
            <div>
                <h3>Welcome to Pill Check!</h3>
                <Form>
                    <Form.Field>
                        <input name='username' placeholder="Username..." value={this.state.username} />
                    </Form.Field>
                    <Form.Field>
                        <input name='password' placeholder="Password..." value={this.state.password} />
                    </Form.Field>
                </Form>
            </div>
         );
    }
}
 
export default LoginForm;