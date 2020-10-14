import React, { Component } from 'react';
import {Button, List } from 'semantic-ui-react';
import '../sidebar.css'

const SideBar = (props) => {
    return (  

        <div className='sidenav'>

        {/* <Button value="mymeds">My Meds</Button>
        <Button value="copd" onClick={(e) => this.props.handleChange(e)}>COPD</Button> 
        <Button value="diabetes" onClick={(e) => this.props.handleChange(e)}>Diabetes</Button> 
        <Button value="htn" onClick={(e) => this.props.handleChange(e)}>Hypertension</Button> 
        <Button value="hld" onClick={(e) => this.props.handleChange(e)}>High Cholesterol</Button> 
        <Button value="notes" onClick={(e) => this.props.handleChange(e)}>My Notes</Button> */}
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
                

        </div>
    );
}
 
export default SideBar;
 




  
    



