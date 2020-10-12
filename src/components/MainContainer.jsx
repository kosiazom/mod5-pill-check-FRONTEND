import React, { Component } from 'react';
import Notes from './Notes'
import Copd from './Copd';
import {Button } from 'semantic-ui-react';
import Sidebar from './Sidebar'
import UserHome from './UserHome'



class MainContainer extends Component {
    state = {
        userView: "home"
      }

      handleChange = (e) => {
      console.dir(e.target.name)
            this.setState({userView: e.target.name})
        
      }

      



    render() { 
        // const component = this.state.isComponentClicked
        return ( 
        <div className='main-container' >
           
            <Sidebar userView={this.state.userView} handleChange={this.handleChange}/>
            <UserHome userView={this.state.userView} handleChange={this.handleChange}/>

        </div> );
    }
}
 
export default MainContainer;