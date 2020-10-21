import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../login.css'



class LoginForm extends Component {
   

    handleClick = () =>{
        this.props.history.push({
            pathname:`/main-page`
           })
    }

    

    render() { 
        return ( 
        
       
                <div className="login-container">
            <div class="login-center">
                <h1>Login</h1>
                <form onSubmit={(e) =>{
                                        this.handleClick()
                                        this.props.handleLogin(e) }}>
                    <div className="txt_field">
                    {/* <label>Username</label> */}
                        <input type="text" name="username" required placeholder="Username...." value={this.props.username} onChange={this.props.handleOnChange}/>
                        <span></span>
                    </div>
                    <div className="txt_field">
                        {/* <label>Password</label> */}
                        <input type="password" name="password" required  placeholder="Password..."value={this.props.password} onChange={this.props.handleOnChange}/>
                        <span></span>
                    </div> <br></br><br></br><br></br><br></br>
                    <input type="submit" value="Login" />
                    <div className="signup_link">New to PillNotes? <Link to='/create-user-profile'>Register Here!!</Link> </div>
                </form>

            </div>
               </div>
           
          
         );
    }
}
 
export default LoginForm;