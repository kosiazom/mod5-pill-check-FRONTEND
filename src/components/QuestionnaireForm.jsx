import React, { Component } from 'react';
import {Button,Form } from 'semantic-ui-react'


const diseaseUrl = 'http://localhost:3000/api/v1/disease_states'

class QuestionnaireForm extends Component {

    state ={
        currentUser: " ",
        hypertension: null,
        diabetes: null,
        hyperlipidemia: null,
        copd: null
    }

    // componentDidMount() {
    //     if(localStorage.token)
    //     fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
    //     .then( res => res.json() )
    //     .then(user => {
    //         this.setState({
    //             currentUser: user,
    //             hypertension: user.disease_state.hypertension ? "yes" : "no",
    //             diabetes: user.disease_state.diabetes? "yes" : "no",
    //             copd: user.disease_state.copd ? "yes" : "no",
    //             hyperlipidemia: user.disease_state.hyperlipidemia ? "yes" : "no",
    //         })
    //     }) 
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRedirect = () =>{
        this.props.history.push({
            pathname:`/main-page`
           })
    }

    handleSubmitForm = (e) => {
        e.preventDefault()

        console.log('tesing post')
            fetch(diseaseUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                    // "Authorization": `Bearer ${localStorage.token}`
                },
                body: JSON.stringify(
                        
                    { disease_state: {
                        user_id:  localStorage.userID,
                        hypertension: this.state.hypertension === "yes" ? true : false,
                        hyperlipidemia: this.state.hyperlipidemia === "yes" ? true : false,
                        diabetes: this.state.diabetes === "yes" ? true : false,
                        copd: this.state.copd === "yes" ? true : false
                    }})
            })
            .then( res => res.json() )
            .then( diseases => this.setState({
                currentUser: localStorage.first_name,
                hypertension: this.state.hypertension,
                hyperlipidemia: this.state.hyperlipidemia,
                copd: this.state.copd,
                diabetes:this.state.diabetes
            }))
        // }
        // else {
        //     alert("You must be logged In!!")
        // }

    }
    
    render() {
        return (
            <div className="background-picture">
                <h1>Hello, {this.state.currentUser} Welcome to PillCheck!!</h1>
                <h3>Please Fill Out the Form below</h3>
                <h3>Disease State Form</h3>
                <Form onSubmit={(e) => {
                    this.handleSubmitForm(e)
                    // this.handleRedirect(e)}}>
                }}>
        
            <div className="question-column">
                        <label>Do you have COPD?</label>
                        </div>

                <div className="disease-radio">
                    <label>Yes</label>
                        <input 
                        type="radio" 
                        name="copd" 
                        value="yes"
                        checked={this.state.copd === 'yes'}
                        onChange={this.handleChange}
                        /><br/>
                    
                    <label>No</label>
                        <input 
                        type="radio" 
                        name="copd" 
                        value="no"
                        checked={this.state.copd === 'no'}
                        onChange={this.handleChange}
                        />
                    </div>

            <div className="question-column">
                    <label>Do you have Hypertension?</label>
                </div>

                    <div className="disease-radio">
                        <label>Yes</label>
                            <input 
                            type="radio" 
                            name="hypertension" 
                            value="yes"
                            checked={this.state.hypertension === 'yes'}
                            onChange={this.handleChange}
                            /><br/>
                        
                        <label>No</label>
                            <input 
                            type="radio" 
                            name="hypertension" 
                            value="no"
                            checked={this.state.hypertension === 'no'}
                            onChange={this.handleChange}
                            />
                        </div>
            
         <div className="question-column">
                    <label>Do you have Hyperlipidemia (High Cholesterol)?</label>
                </div>

                    <div className="disease-radio">
                        <label>Yes</label>
                            <input 
                            type="radio" 
                            name="hyperlipidemia" 
                            value="yes"
                            checked={this.state.hyperlipidemia === 'yes'}
                            onChange={this.handleChange}
                            /><br/>
                        
                        <label>No</label>
                            <input 
                            type="radio" 
                            name="hyperlipidemia" 
                            value="no"
                            checked={this.state.hyperlipidemia === 'no'}
                            onChange={this.handleChange}
                            />
                        </div>

          
          
        <div className="question-column">
                    <label>Do you have Type 2 Diabetes?</label>
                </div>

                    <div className="disease-radio">
                        <label>Yes</label>
                            <input 
                            type="radio" 
                            name="diabetes" 
                            value="yes"
                            checked={this.state.diabetes === 'yes'}
                            onChange={this.handleChange}
                            /><br/>
                        
                        <label>No</label>
                            <input 
                            type="radio" 
                            name="diabetes" 
                            value="no"
                            checked={this.state.diabetes === 'no'}
                            onChange={this.handleChange}
                            /><br />
                        </div>

                 <Button type="submit" value="submit" >Submit</Button>

              </Form> 

            Hypertension:  {this.state.hypertension}
            </div>
        );
    }
}

export default QuestionnaireForm;
