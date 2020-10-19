import React from 'react'
import HTNCard from './HTNCard'

const Hypertension = (props) => {
    return (
        <div>
             <h3>What is Hypertension(High Blood Pressure)?</h3>
             <p>Hypertension is blah blah blah</p>

             <div className="ui four cards">
        {props.displayMedications.map(htnMed =>  <HTNCard htnMed={htnMed} key={htnMed.id}/>)}
        </div>
        </div>
    )
}

export default Hypertension
