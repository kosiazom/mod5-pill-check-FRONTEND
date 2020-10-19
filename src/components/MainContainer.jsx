import React, { Component } from 'react';
import Sidebar from './Sidebar'
import UserHome from './UserHome'
import Head from './Head'
import Footer from './Footer'
import '../maincontainer.css'

const medsUrl = 'http://localhost:3000/api/v1/medications'
const notesUrl = 'http://localhost:3000/api/v1/notes'


class MainContainer extends Component {
    state = {
        userView: "home",
        medications: [],
        displayMedications: [],
        myMeds: []
    
      }
 
  
      handleChange = (e) => {
      console.dir(e.target.name)
            this.setState({userView: e.target.name})
      }

      componentDidMount() {
            fetch(medsUrl)
            .then( res => res.json() )
            .then(medications => this.setState({
                medications
            }))
      }


      getMeds = (e) => {
    //       
      let filteredMeds = [...this.state.medications]
      if(e.target.name) {
          filteredMeds = filteredMeds.filter(medicine => medicine.indication == e.target.name)
        //   copdMeds = copdMeds.filter(medicine => medicine.indication == this.state.indication)
        //   debugger
        // console.log(e.target.name)
          this.setState({
              userView: e.target.name,
              displayMedications: filteredMeds
          })
      }
     
      }
      



    render() { 
       
        return ( 
        <div className='main-container' >
           <Head />
            <Sidebar userView={this.state.userView} 
            handleChange={this.handleChange}
            getMeds={this.getMeds}
            />
            <UserHome userView={this.state.userView} 
            handleChange={this.handleChange} 
            displayMedications={this.state.displayMedications}
            myMeds={this.state.myMeds}
    
          
            />
            <Footer />

        </div> );
    }
}
 
export default MainContainer;