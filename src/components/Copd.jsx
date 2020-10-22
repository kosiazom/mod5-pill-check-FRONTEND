import React, { useState } from 'react';
import CopdCard from './CopdCard'
import {Button} from 'semantic-ui-react'


const Copd = (props) => {

    const [showMeds, setshowMeds] = useState(false)

 const revealMeds = () => {
     setshowMeds(true)
 }

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
         </div><br></br><br></br><br></br>

         <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for Diabetes</Button><br></br><br></br><br></br>

         {showMeds ?
         <div className="ui four cards">
        {props.displayMedications.map(copdMed =>  <CopdCard copdMed={copdMed} key={copdMed.id}/>)}
        </div> :  null}


    </div> );
}
 
export default Copd;