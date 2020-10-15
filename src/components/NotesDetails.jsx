import React from 'react';
import {Card} from 'semantic-ui-react'


const NotesDetails = (props) => {
    return (
    
            <Card>
                <Card.Content>
                    <Card.Header>Note Title</Card.Header>
                    <Card.Meta>{props.noteObj.date}</Card.Meta>
                    <Card.Description>
                        {props.noteObj.description}
                    </Card.Description>
                </Card.Content>
            </Card>
    )
}

export default NotesDetails
