import React, { Component } from 'react';
import {Button, List } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom'
import '../sidebar.css'

const SideBar = (props) => {

    let logout = () => {
        localStorage.clear()
        
    }
    
    // const handleRedirect = () => {
    //     debugger
    //     // props.history.push({
    //     //     pathname: "/"
    //     //    })
    // }
    return (  

        <div className='sidenav'>


            <a name="mymeds" onClick={(e) => props.handleChange(e)}>My Meds</a><br/>
            <a name="COPD" onClick={(e) => {
                props.handleChange(e)
                props.getMeds(e) }}>COPD</a><br/>
            <a name="Diabetes" onClick={(e) => {
                props.handleChange(e)
                props.getMeds(e)}
                }>Diabetes</a><br/>
            <a name="Hypertension" onClick={(e) => {
                props.handleChange(e)
                props.getMeds(e)}}>Hypertension</a><br/>
            <a name="Hyperlidemia" onClick={(e) => {
                props.handleChange(e)
                props.getMeds(e)}}>High Cholesterol</a><br/>
            <a name="notes" onClick={(e) => props.handleChange(e)}>My Notes</a><br/>
            
            <NavLink style={{background: "#000"}}to='/'>
            <a onClick={() => logout()}>LogOut</a>
                
            </NavLink>


            

       
        </div>
    );
}
 
export default SideBar;
 




  
    



