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
             <h1>What is Hypertension(High Blood Pressure)?</h1>
                    <p>Hypertension is a common disease where the pressure of your blood is pushing against the walls of your arteries.
                        It is also know as the "Silent Disease". </p>
                        <img src="https://kidshealth.org/EN/images/illustrations/hypertension-415x233-rd7-enIL.png" />
                <h2>Best ways to manage Hypertension </h2>
                <p>Aside from diligently taking your prescribed medications there are lifestyle changes we can make to manage our High Blood Pressure</p>
                        
                            <li>Maintain a healthy weight: Hypertension is likely to occur in overweight individuals.</li>
                            <li>Diets rich in fruits and vegetables and low in saturated fats can be good for you.</li>
                            <li>Watch your sodium intake.</li>
                        <br></br><br></br><br></br>

                        <h3><a href="https://www.heart.org/en/health-topics/high-blood-pressure" target="_blank">Click here to learn more</a></h3><br></br><br></br><br></br>

             <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for Hyperlipidemia</Button><br></br><br></br><br></br>

             {showMeds ?
             <div className="ui four cards">
        {props.displayMedications.map(htnMed =>  <HTNCard htnMed={htnMed} key={htnMed.id}/>)}
        </div> : null}

        </div>
    )
}

export default Hypertension
