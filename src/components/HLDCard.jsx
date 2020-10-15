import React from 'react'
import {Card} from 'semantic-ui-react'

const HLDCard = (props) => {
    return (

        <div>
            <Card.Group>
            <Card
            color="red"
            image={props.hldMed.image}
            header={props.hldMed.name} 
            />
            </Card.Group>
        </div>
    )
}

export default HLDCard
