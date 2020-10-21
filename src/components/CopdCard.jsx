import React, {useState} from 'react'
import { Card, Button, Header, Image, Modal } from 'semantic-ui-react'



const CopdCard = (props) => {
  const [open, setOpen] = React.useState(false)



    return (
        
       
        <Card >
        <Image src={props.copdMed.image} wrapped ui={false} style={{height: "275px", width: "265px"}}/>
        <Card.Content>
          <Card.Header>{props.copdMed.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{null}</span>
          </Card.Meta>
          <Card.Description>
             {null}
          </Card.Description>
        </Card.Content>
       <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button color="black">More Details</Button>}
    >
      <Modal.Header>{props.copdMed.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={props.copdMed.image} wrapped />
        <Modal.Description>
          <Header>Indication: {props.copdMed.indication}</Header>
          <h4>Side Effects: {props.copdMed.side_effects}</h4>
          <h4>Drug Class: {props.copdMed.drug_class}</h4>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        
      </Modal.Actions>
    </Modal>
      </Card>
                
                
                )
            }
            
            export default CopdCard
            
           