import React, {useState} from 'react'
import HTNCard from './HTNCard'
import {Button} from 'semantic-ui-react'


const Hypertension = (props) => {
    const [showMeds, setshowMeds] = useState(false)

    const revealMeds = () => {
        setshowMeds(true)
    }

    return (
        <div>
             <h3>What is Hypertension(High Blood Pressure)?</h3>
             <p>Hypertension is blah blah blah</p>

             <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for Hyperlipidemia</Button><br></br><br></br><br></br>

             {showMeds ?
             <div className="ui four cards">
        {props.displayMedications.map(htnMed =>  <HTNCard htnMed={htnMed} key={htnMed.id}/>)}
        </div> : null}

        </div>
    )
}

export default Hypertension
