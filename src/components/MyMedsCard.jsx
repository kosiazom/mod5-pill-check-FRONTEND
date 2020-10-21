import React from 'react'
import "semantic-ui-css/semantic.min.css"
import { Button, Card, Image, Icon } from 'semantic-ui-react'

const MyMedsCard = (props) => {
    console.log(props)

return (

    <Card >
    <Image src={props.medObj.image} wrapped ui={false} style={{height: "275px", width: "265px"}}/>
    <Card.Content>
      <Card.Header>{props.medObj.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.medObj.indication}</span>
      </Card.Meta>
      <Card.Description>
        <strong>Common Side Effects:</strong> {props.medObj.side_effects}
       
      </Card.Description><br></br><br></br>
      <Button color="red" onClick={null}>X</Button>
    </Card.Content>
   
  </Card>


)
}
export default MyMedsCard;

