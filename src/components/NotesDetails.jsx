import React, {useState} from 'react';
import {Card, Button, Header, Modal, Icon} from 'semantic-ui-react'


const NotesDetails = (props) => {
    const [open, setOpen] = useState(false)

    return (
     <div>
            <Card>
                <Card.Content>
                    <Card.Header>Note Title</Card.Header>
                    <Card.Meta>{props.noteObj.date}</Card.Meta>
                    <Card.Description>
                        {props.noteObj.description}
                    </Card.Description>
                </Card.Content>
            </Card>
            <div>
            <Modal
                closeIcon
                open={open}
                trigger={<Button>View Note</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                >
                <Header icon='sticky note' content='Note Title' />
                <Modal.Content>
                    <p>
                    {props.noteObj.description}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Delete
                    </Button>
                    <Button color='green' onClick={() => setOpen(false)}>
                    <Icon name='checkmark' /> Edit
                    </Button>
                </Modal.Actions>
    </Modal>
  
            </div>
    </div>
    )
}

export default NotesDetails
