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
        console.log(this.props)
        return (
            <div className="userHome">

             {this.props.userView === "mymeds" && <MyMeds myMeds={this.props.myMeds} />}  
             {this.props.userView === "COPD" && <Copd displayMedications={this.props.displayMedications}/>}  
             {this.props.userView === "Diabetes" && <Diabetes displayMedications={this.props.displayMedications}/>}  
             {this.props.userView === "Hypertension" && <Hypertension displayMedications={this.props.displayMedications}/>}  
             {this.props.userView === "Hyperlidemia" && <Hyperlipidemia displayMedications={this.props.displayMedications}/>}  
             {this.props.userView === "notes" && <Notes />} 
            </div>
        );
    }
}

export default UserHome;
