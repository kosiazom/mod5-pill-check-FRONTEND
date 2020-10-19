import React, { Component } from 'react';
import CopdCard from './CopdCard'


const Copd = (props) => {
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
        {props.displayMedications.map(copdMed =>  <CopdCard copdMed={copdMed} key={copdMed.id}/>)}
    </div> );
}
 
export default Copd;