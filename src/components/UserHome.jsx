import React, { Component } from 'react';
import Copd from './Copd'
import Notes from './Notes'

class UserHome extends Component {
    render() {
        return (
            <div>
               
             {this.props.userView === "copd" && <Copd />}  
             {this.props.userView === "home" && <Notes />} 
            </div>
        );
    }
}

export default UserHome;
