import React from 'react'
import { Card, Button, Header, Image, Modal } from 'semantic-ui-react'

const HLDCard = (props) => {

    const [open, setOpen] = React.useState(false)


    return (
        <Card>
                <Image src={props.hldMed.image} wrapped ui={false} style={{height: "275px", width: "265px"}}/>
                <Card.Content>
                <Card.Header>{props.hldMed.name}</Card.Header>
                 
                </Card.Content>
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button style={{background: "whitesmoke"}}>More Details</Button>}
                    >
                    <Modal.Header>{props.hldMed.name}</Modal.Header>
                    <Modal.Content image>
                        <Image size='medium' src={props.hldMed.image} wrapped />
                        <Modal.Description>
                        <Header>Indication: {props.hldMed.indication}</Header>
                        <h4>Side Effects: {props.hldMed.side_effects}</h4>
                        <h4>Drug Class: {props.hldMed.drug_class}</h4>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        
                    </Modal.Actions>
                 </Modal>
            
        </Card>
    
    )
}

export default HLDCard
