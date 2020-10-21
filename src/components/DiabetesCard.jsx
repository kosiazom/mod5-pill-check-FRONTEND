import React from 'react'
import { Card, Button, Header, Image, Modal } from 'semantic-ui-react'

const DiabetesCard = (props) => {
    const [open, setOpen] = React.useState(false)

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
        <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button color="black">More Details</Button>}
                    >
                    <Modal.Header>{props.dmMed.name}</Modal.Header>
                    <Modal.Content image>
                        <Image size='medium' src={props.dmMed.image} wrapped />
                        <Modal.Description>
                        <Header>Indication: {props.dmMed.indication}</Header>
                        <h4>Side Effects: {props.dmMed.side_effects}</h4>
                        <h4>Drug Class: {props.dmMed.drug_class}</h4>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        
                    </Modal.Actions>
                 </Modal>
            
            </Card>
            
        
    )
}

export default DiabetesCard



