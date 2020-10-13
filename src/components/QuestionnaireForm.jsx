import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'


const diseaseUrl = 'http://localhost:3000/api/v1/vaccination_records'

class QuestionnaireForm extends Component {

    state ={
        currentUser: {},
        hypertension: null,
        diabetes: null,
        hyperlipidemia: null,
        copd: null
    }

    componentDidMount() {
        if(localStorage.token)
        fetch(`http://localhost:3000/api/v1/users/${localStorage.userID}`)
        .then( res => res.json() )
        .then(user => {
            this.setState({
                currentUser: user,
                hypertension: user.disease_state.hypertension ? "yes" : "no",
                diabetes: user.disease_state.diabetes? "yes" : "no",
                copd: user.disease_state.copd ? "yes" : "no",
                hyperlipidemia: user.disease_state.hyperlipidemia ? "yes" : "no",
            })
        }) 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmitForm = (e) => {
        e.preventDefault()

        if(localStorage.token) {
            fetch(diseaseUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${localStorage.token}`
                },
                body: JSON.stringify(
                    { disease_state: {
                        user_id: this.state.currentUser.id,
                        hypertension: this.state.hypertension === "yes" ? true : false,
                        hyperlipidemia: this.state.hyperlipidemia === "yes" ? true : false,
                        diabetes: this.state.diabetes === "yes" ? true : false,
                        copd: this.state.copd === "yes" ? true : false
                    }})
            })
            .then( res => res.json() )
            .then( console.log )
        }
        else {
            alert("You must be logged In!!")
        }

    }
    
    render() {
        return (
            <div>
                <h3>Disease State Form</h3>
                <Form>
                    <div className="question-column">
                    <label>Do you have COPD?</label>
                    </div>
                    
                 <label>Do you have COPD?</label>
                 <input type="radio" name="copd" value="copd"></input>

                 <label>Do you have Hypertension?</label>
                 <input type='radio' name="htn"></input>

                 <label>Do you have Hyperlipidemia?</label>
                 <input type='radio' name="hc"></input>

                 <label>Do you have Diabetes?</label>
                 <input type='radio' name='diabetes'></input>

                 <input type="submit" value="submit" />

              </Form> 
            </div>
        );
    }
}

export default QuestionnaireForm;
