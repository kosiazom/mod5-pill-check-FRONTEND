import React from 'react'
import HLDCard from './HLDCard'

const Hyperlipidemia = (props) => {
    return (
        <div>
            
            <h3>What is Hyperlipidemia(High Cholesterol) ?</h3>

            <p>Hyperlipidemia is blah blah blah</p>

            <h4>Best ways to manage Hyperlipidemia: </h4>
            {props.displayMedications.map(hldMed =>  <HLDCard hldMed={hldMed} key={hldMed.id}/>)}
        
        </div>
    )
    
}

export default Hyperlipidemia
