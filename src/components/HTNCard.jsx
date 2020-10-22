import React from 'react'
import { Card, Button, Header, Image, Modal } from 'semantic-ui-react'

const HTNCard = (props) => {

    const [open, setOpen] = React.useState(false)


    return (
      
            <Card>
                <Image src={props.htnMed.image} wrapped ui={false} style={{height: "275px", width: "265px"}}/>
                <Card.Content>
                <Card.Header>{props.htnMed.name}</Card.Header>
                 
                </Card.Content>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button style={{background: "whitesmoke"}}>More Details</Button>}
                    >
                    <Modal.Header>{props.htnMed.name}</Modal.Header>
                    <Modal.Content image>
                        <Image size='medium' src={props.htnMed.image} wrapped />
                        <Modal.Description>
                        <Header>Indication: {props.htnMed.indication}</Header>
                        <h4>Side Effects: {props.htnMed.side_effects}</h4>
                        <h4>Drug Class: {props.htnMed.drug_class}</h4>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        
                    </Modal.Actions>
                 </Modal>
               
            </Card>
        
    )
}

export default HTNCard

// image={props.htnMed.image}
// header={props.htnMed.name}