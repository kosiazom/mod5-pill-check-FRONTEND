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
             <h1>What is Diabetes(Type 2 Diabetes)</h1><br></br><br></br>
         </div>
         <div>
            <p>Type 2 Diabetes is the most common form of diabtetes(Type 1 Diabetes, Gestational Diabetes).</p> <br></br>
            <p>Essentially, this means that your body doesn't do a good responding to the insulin your body is producing.</p><br></br>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSS2bP8LC_gsFVW4Sqh1qelK7KxXivYOcHuqQ&usqp=CAU" style={{height: "300px"}} />
         </div>
         <div>
            <h2>Best ways to manage your Diabetes </h2>
               <li>Maintain a healthy weight.</li>
               <li>Be more active, try to exercise about 3 times a week.</li>
               <li>Have a healthy balanced diet.</li>
         </div><br></br><br></br><br></br>

         <h3><a href="https://www.diabetes.org/diabetes/type-2" target="_blank">Click here to learn more</a></h3><br></br><br></br><br></br>
         
        <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for Diabetes</Button><br></br><br></br><br></br>
        
       {showMeds ? 
        <div className="ui four cards">
        {props.displayMedications.map(dmMed =>  <DiabetesCard dmMed={dmMed} key={dmMed.id}/>)}
        </div> :  null}
 
       
        </div>
    )
}
export default Diabetes
