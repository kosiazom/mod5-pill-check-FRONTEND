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
            
            <h1>What is Hyperlipidemia(High Cholesterol)?</h1>

                <p>Hyperlipidemia is a condition where you have high levels of fat particles in the blood.</p><br></br>
                <p>Too much fat in the blood can harden your arteries. This is where it becomes a problem.</p>
                    <img src="https://www.siumed.edu/sites/default/files/u174/shutterstock_77118016.jpg" style={{height: "400px"}} />
            <h2>Best ways to manage Hyperlipidemia: </h2>
                    
                            <li>Lose weight.</li>
                            <li>Diets rich in fruits and vegetables and low in saturated fats can be good for you.</li>
                            <li>Quit Smoking.</li>
                            <li>Become more physically active.</li>
                        <br></br><br></br><br></br>

                        <h3><a href="https://www.heart.org/en/health-topics/cholesterol/prevention-and-treatment-of-high-cholesterol-hyperlipidemia" target="_blank">Click here to learn more</a></h3><br></br><br></br><br></br>


            <Button style={{background: "#b4b5a6"}} onClick={(e) => revealMeds(e)}>Common Medications Used for Hyperlipidemia</Button><br></br><br></br><br></br>

            {showMeds ? 
            <div className="ui four cards">
            {props.displayMedications.map(hldMed =>  <HLDCard hldMed={hldMed} key={hldMed.id}/>)}
            </div> : null} 




        </div>
    )
    
}

export default Hyperlipidemia
