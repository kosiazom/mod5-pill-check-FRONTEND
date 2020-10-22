import React, {useState} from 'react'
import HLDCard from './HLDCard'
import {Button} from 'semantic-ui-react'

const Hyperlipidemia = (props) => {
    const [showMeds, setshowMeds] = useState(false)


 const revealMeds = () => {
    setshowMeds(true)
}

    return (
        <div>
            
            <h3>What is Hyperlipidemia(High Cholesterol) ?</h3>

            <p>Hyperlipidemia is blah blah blah</p>

            <h4>Best ways to manage Hyperlipidemia: </h4>


            <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for Hyperlipidemia</Button><br></br><br></br><br></br>

            {showMeds ? 
            <div className="ui four cards">
            {props.displayMedications.map(hldMed =>  <HLDCard hldMed={hldMed} key={hldMed.id}/>)}
            </div> : null} 




        </div>
    )
    
}

export default Hyperlipidemia
