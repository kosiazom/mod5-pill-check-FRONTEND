import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const DiabetesCard = (props) => {
    // console.log(props)
    return (
      
         
            <Card>
            <Image src={props.dmMed.image} wrapped ui={false} style={{height: "275px", width: "265px"}}/>
    <Card.Content>
      <Card.Header>{props.dmMed.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{null}</span>
      </Card.Meta>
      <Card.Description>
        {null}
      </Card.Description>
    </Card.Content>
            </Card>
            
        
    )
}

export default DiabetesCard



