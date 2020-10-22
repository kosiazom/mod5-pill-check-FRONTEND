import React, {useState} from 'react'
import DiabetesCard from './DiabetesCard'
import {Button} from 'semantic-ui-react'


const Diabetes = (props) => {
 const [showMeds, setshowMeds] = useState(false)

 const revealMeds = () => {
     setshowMeds(true)
 }

//  const toggleButton = () => {
//      setshowMeds(false)
//  }

return (
        
    <div>
        <div>
             <h3>What is Diabetes(Type 2 Diabetes)</h3>
         </div>
         <div>
            <p>Type 2 Diabetes is the most common form of diabtetes. Essentially, it means that your body doesn't responding to the insulin your body is producing</p>
         </div>

         <div>
            <h4>Best ways to manage your Diabetes </h4>
               <li>Maintain a healthy weight.</li>
               <li>Be more active, try to exercise about 3 times a week.</li>
               <li>Have a healthy balanced diet.</li>
         </div><br></br><br></br><br></br>
         
        <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for Diabetes</Button><br></br><br></br><br></br>
        
       {showMeds ? 
        <div className="ui four cards">
        {props.displayMedications.map(dmMed =>  <DiabetesCard dmMed={dmMed} key={dmMed.id}/>)}
        </div> :  null}
 
       
        </div>
    )
}
export default Diabetes
