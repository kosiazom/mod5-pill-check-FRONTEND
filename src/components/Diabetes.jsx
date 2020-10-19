import React from 'react'
import DiabetesCard from './DiabetesCard'
import {Grid} from 'semantic-ui-react'

const Diabetes = (props) => {
    return (
        

<div>
        <div>
                <h3>What is Chronic Obstructive Pulmonary Disease?</h3>
         </div>
         <div>
         <p>COPD is blah blah blah</p>
         </div>
         <div>
         <h4>Best ways to manage Chronic Obstructive Pulmonary Disease: </h4>
         </div>
        <div>
         <h4>Common Medications used for COPD:</h4>
         </div>
         <div className="ui four cards">
         {props.displayMedications.map(dmMed =>  <DiabetesCard dmMed={dmMed} key={dmMed.id}/>)}
        </div>
       
        </div>
    )
}//in the parent put the grid here
export default Diabetes
