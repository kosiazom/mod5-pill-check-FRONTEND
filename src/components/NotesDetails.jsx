import React, {useState} from 'react';
import {Card, Button, Header, Modal, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
// import EditNoteDetail


const NotesDetails = (props) => {
    // console.log(props)
    const [open, setOpen] = useState(false)

    return (
    
            <Card>
                <Card.Content>
                    <Card.Header>{props.noteObj.title}</Card.Header>
                    <Card.Meta>{props.noteObj.date}</Card.Meta>
                    <Card.Description>
                        {props.noteObj.description}
                    </Card.Description>
                </Card.Content>
                <Modal
                closeIcon
                open={open}
                trigger={<Button style={{background: "transparent"}}>View Note</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                >
                <Header icon='sticky note' content={props.noteObj.title} />
                <Modal.Content>
                    <p>
                    {props.noteObj.description}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}
                                        onClick={(e) => props.deleteMyNote(props.noteObj)}>
                    <Icon name='remove' /> Delete
                    </Button>

                    <Link to={{pathname: "edit-note", noteToEdit: props.noteObj}}>
                    <Button color='green' onClick={() => setOpen(false)}>
                                             
                    <Icon name='checkmark' /> Edit
                    </Button>
                    </Link>
                </Modal.Actions>
            </Modal>
            </Card>
            /* <div>
            <Modal
                closeIcon
                open={open}
                trigger={<Button>View Note</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                >
                <Header icon='sticky note' content={props.noteObj.title} />
                <Modal.Content>
                    <p>
                    {props.noteObj.description}
                    </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}
                                        onClick={(e) => props.deleteMyNote(props.noteObj)}>
                    <Icon name='remove' /> Delete
                    </Button>

                    <Link to={{pathname: "edit-note", noteToEdit: props.noteObj}}>
                    <Button color='green' onClick={() => setOpen(false)}>
                                             
                    <Icon name='checkmark' /> Edit
                    </Button>
                    </Link>
                </Modal.Actions>
            </Modal>
  
            </div> */
   
    )
}

export default NotesDetails
