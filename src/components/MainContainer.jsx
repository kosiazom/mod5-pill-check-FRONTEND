import React, { Component } from 'react';
import Notes from './Notes'
import Copd from './Copd';
import {Button } from 'semantic-ui-react';



class MainContainer extends Component {
    state = {
        isComponentClicked: false
      }


      handleCopd = () => {
        // debugger
       this.setState({isComponentClicked: true})
      }



    render() { 
        const component = this.state.isComponentClicked
        return ( <div>
            {component 
            ? <Button onClick={ this.handleCopd } >COPD</Button> ? <Copd /> : null
        }
            <Button>Notes</Button>
        </div> );
    }
}
 
export default MainContainer;