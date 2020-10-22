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
        
         <h1>What is Chronic Obstructive Pulmonary Disease?</h1>
         
         <p>COPD is a progressive disease that affects your lungs and ability to breathe.</p><br></br>
         <p>The primary cause for COPD is smoking but not limited to it.</p>
         <img src="https://www.ruralhealthinfo.org/rural-monitor/wp-content/uploads/2019/11/copd-graphic-large.jpg" />
         <div>
         <h2>Best ways to manage Chronic Obstructive Pulmonary Disease: </h2>
         </div><br></br><br></br><br></br>
        

         <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for COPD</Button><br></br><br></br><br></br>

         {showMeds ?
         <div className="ui four cards">
        {props.displayMedications.map(copdMed =>  <CopdCard copdMed={copdMed} key={copdMed.id}/>)}
        </div> :  null}


    </div> );
}
 
export default Copd;