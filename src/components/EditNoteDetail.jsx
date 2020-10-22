import React, {useState} from 'react'
import {Form, Input, Header, TextArea, Button} from 'semantic-ui-react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const EditNoteDetail = (props) => {
    let noteToEdit= props.location.noteToEdit
    console.log(props)
    // const [date, setDate] = useState( new Date() )
const [title, setTitle] = useState(noteToEdit.title)
const [description, setDescription] = useState(noteToEdit.description)
const [id, setID] = useState(noteToEdit.id)

const handleClick = () =>{
    props.history.push({
        pathname:`/main-page`
       })
       
}

    return (
        <div className="edit-note">
            <Header>Edit My Note</Header>
            <Form onSubmit={(e) =>{
                handleClick()
                props.editNote(e, id)}}>
        
        <input type="hidden" id="id" value={id} />
         
        {/* <h4>Select Date</h4>
        <DatePicker
        label="Today's Date"
        selected={date} 
        name="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        
        /> */}
        
        <Form.Input
        //  control={Input}
         label="Title"
         name="title"
         type="text"
         value={title}
         placeholder='Title'
         onChange={(e) => setTitle(e.target.value)}
         /> 

        <Form.Input
         control={TextArea}
         label="Description"
         name="description"
         value={description}
         type="text"
         placeholder='What are you feeling...'
         onChange={e => setDescription(e.target.value)}
         />
         <Button>Update Note</Button>

       </Form>
        </div>
    )
}

export default EditNoteDetail

