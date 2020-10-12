import React, { Component } from 'react';
import {Button } from 'semantic-ui-react';

class Sidebar extends Component {
 




    render() {
        return (
            <div className='sidenav'>

            {/* <Button value="mymeds">My Meds</Button>
            <Button value="copd" onClick={(e) => this.props.handleChange(e)}>COPD</Button> 
            <Button value="diabetes" onClick={(e) => this.props.handleChange(e)}>Diabetes</Button> 
            <Button value="htn" onClick={(e) => this.props.handleChange(e)}>Hypertension</Button> 
            <Button value="hld" onClick={(e) => this.props.handleChange(e)}>High Cholesterol</Button> 
            <Button value="notes" onClick={(e) => this.props.handleChange(e)}>My Notes</Button> */}
                <a value="mymeds" onClick={(e) => this.props.handleChange(e)}>My Meds</a>
                <a value="copd" onClick={(e) => this.props.handleChange(e)}>COPD</a>
                <a value="diabetes" onClick={(e) => this.props.handleChange(e)}>Diabetes</a>
                <a value="htn" onClick={(e) => this.props.handleChange(e)}>Hypertension</a>
                <a value="hc" onClick={(e) => this.props.handleChange(e)}>High Cholesterol</a>
                <a value="notes" onClick={(e) => this.props.handleChange(e)}>My Notes</a>
                    
   
            </div>
        );
    }
}

export default Sidebar;



