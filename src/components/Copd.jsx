import React, { Component } from 'react';
import CopdCard from './CopdCard'


const Copd = (props) => {
    return ( <div>
        You are COPD
        {props.displayMedications.map(copdMed =>  <CopdCard copdMed={copdMed}/>)}
    </div> );
}
 
export default Copd;