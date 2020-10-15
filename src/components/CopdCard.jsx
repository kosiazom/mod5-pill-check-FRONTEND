import React from 'react'
import { Card } from 'semantic-ui-react'



const CopdCard = (props) => {
    // console.log(props)
    return (
        
        <div>
          <Card.Group>
                <Card 
                color='red'
                image={props.copdMed.image}
                header={props.copdMed.name}
                />
           </Card.Group>
        </div>
    )
}

export default CopdCard
