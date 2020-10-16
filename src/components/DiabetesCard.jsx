import React from 'react'
import { Card, CardContent, Image } from 'semantic-ui-react'

const DiabetesCard = (props) => {
    console.log(props)
    return (
        <div>
         
            <Card color='blue'>
                 <Image 
                 src={props.dmMed.image}
                 wrapped
                 ui={false}
                 />
            <Card.Content>
                <Card.Header>
                {props.dmMed.name}
                </Card.Header>
            </Card.Content>
            
            </Card>
            
        </div>
    )
}

export default DiabetesCard
