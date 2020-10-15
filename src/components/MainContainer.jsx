import React, { Component } from 'react';
import Notes from './Notes'
import Copd from './Copd';
import {Button } from 'semantic-ui-react';
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
        displayNotes: []
        // indication: "COPD"
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

      componentDidMount(){
        fetch(notesUrl)
        .then( res => res.json() )
        .then(notes => this.setState({
          displayNotes: notes
        }))
      }

      getMeds = (e) => {
    //       let copdDrugs = this.state.medications.filter(medication => medication.indication === "COPD" )
    //       this.setState({
    //           medications: copdDrugs
    //       })
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
            displayNotes={this.state.displayNotes}
          
            />
            <Footer />

        </div> );
    }
}
 
export default MainContainer;