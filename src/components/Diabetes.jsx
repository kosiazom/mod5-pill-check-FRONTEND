import React from 'react'
import DiabetesCard from './DiabetesCard'
import {Grid} from 'semantic-ui-react'

const Diabetes = (props) => {
    return (
        
        <div>
           <h3>What is Diabetes?</h3>
           <Grid celled="internally"> 
                <Grid.Row>

                    <Grid.Column width={3}>
            {props.displayMedications.map(dmMed =>  <DiabetesCard dmMed={dmMed} key={dmMed.id}/>)}
                    </Grid.Column>  
                </Grid.Row>
            </Grid>
        
        </div>
    )
}//in the parent put the grid here
export default Diabetes
