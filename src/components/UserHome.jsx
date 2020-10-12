import React, { Component } from 'react';
import Copd from './Copd';
import Notes from './Notes';
import '../userHome.css';
import Hyperlipidemia from './HLD'
import Hypertension from './HTN'
import Diabetes from './Diabetes';
import MyMeds from './MyMeds';

class UserHome extends Component {

    render() {
        return (
            <div className="userHome">

             {this.props.userView === "mymeds" && <MyMeds />}  
             {this.props.userView === "copd" && <Copd />}  
             {this.props.userView === "diabetes" && <Diabetes/>}  
             {this.props.userView === "htn" && <Hypertension />}  
             {this.props.userView === "hc" && <Hyperlipidemia/>}  
             {this.props.userView === "notes" && <Notes />} 
            </div>
        );
    }
}

export default UserHome;
