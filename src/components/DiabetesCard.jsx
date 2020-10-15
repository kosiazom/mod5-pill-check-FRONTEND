import React from 'react'
import { Card } from 'semantic-ui-react'

const DiabetesCard = (props) => {
    console.log(props)
    return (
        <div>
          <Card.Group>
            <Card
            color='blue'
            image={props.dmMed.image}
            header={props.dmMed.name}
            />
            </Card.Group>  
        </div>
    )
}

export default DiabetesCard
