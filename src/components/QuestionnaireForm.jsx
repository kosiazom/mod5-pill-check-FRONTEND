import React, { Component } from 'react';
import {Form} from 'semantic-ui-react'

class QuestionnaireForm extends Component {

    state ={
        currentUser: localStorage.userID
    }

    
    render() {
        return (
            <div>

                <Form>
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
