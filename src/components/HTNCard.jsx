import React from 'react'
import { Card } from 'semantic-ui-react'

const HTNCard = (props) => {
    return (
        <div>
            <Card.Group>
                <Card
                color='green'
               image={props.htnMed.image}
               header={props.htnMed.name}
               />
            </Card.Group>
        </div>
    )
}

export default HTNCard
