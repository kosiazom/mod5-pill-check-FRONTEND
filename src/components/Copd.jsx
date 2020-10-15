import React, { Component } from 'react';
import CopdCard from './CopdCard'


const Copd = (props) => {
    return ( 
    <div>
         <h3>What is Chronic Obstructive Pulmonary Disease?</h3>
         <p>COPD is blah blah blah</p>

         <h4>Best ways to manage Chronic Obstructive Pulmonary Disease: </h4>

         <h4>Common Medications used for COPD:</h4>
        {props.displayMedications.map(copdMed =>  <CopdCard copdMed={copdMed} key={copdMed.id}/>)}
    </div> );
}
 
export default Copd;