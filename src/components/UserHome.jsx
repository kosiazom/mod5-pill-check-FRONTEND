import React, { Component } from 'react';
import Copd from './Copd'
import Notes from './Notes'

class UserHome extends Component {
    
    render() {
        return (
            <div className="userHome">
               
             {this.props.userView === "copd" && <Copd />}  
             {this.props.userView === "notes" && <Notes />} 
            </div>
        );
    }
}

export default UserHome;
