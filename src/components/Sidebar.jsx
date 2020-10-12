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
            <a name="mymeds" onClick={(e) => props.handleChange(e)}>My Meds</a>
            <a name="copd" onClick={(e) => props.handleChange(e)}>COPD</a>
            <a name="diabetes" onClick={(e) => props.handleChange(e)}>Diabetes</a>
            <a name="htn" onClick={(e) => props.handleChange(e)}>Hypertension</a>
            <a name="hc" onClick={(e) => props.handleChange(e)}>High Cholesterol</a>
            <a name="notes" onClick={(e) => props.handleChange(e)}>My Notes</a>
                

        </div>
    );
}
 
export default SideBar;
 




  
    



