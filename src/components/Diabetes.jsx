import React from 'react'
import DiabetesCard from './DiabetesCard'

const Diabetes = (props) => {
    return (
        <div>
            <h3>What is Diabetes?</h3>
            {props.displayMedications.map(dmMed =>  <DiabetesCard dmMed={dmMed} key={dmMed.id}/>)}
        </div>
    )
}

export default Diabetes
