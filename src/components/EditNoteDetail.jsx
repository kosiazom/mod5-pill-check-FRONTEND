import React from 'react'
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const EditNoteDetail = (props) => {
    return (
        <div>
            <Form onSubmit={(e) => createNote(e)}>
         {/* <Form.Field 
         control={Input}
         label="Date"
         name="date"
         value={date}
         type="text"
         onchange={null}
         /> */}
        <div><h4>Select Date</h4></div>
        <DatePicker
        label="Today's Date"
        selected={date} 
        name="date"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        
        />
        


        <Form.Field
         control={Input}
         label="Title"
         name="title"
         type="text"
         value={title}
         placeholder='Title'
         onChange={(e) => setTitle(e.target.value)}
         /> 

        <Form.Field 
         control={TextArea}
         label="Description"
         name="description"
         value={description}
         type="text"
         placeholder='What are you feeling...'
         onChange={e => setDescription(e.target.value)}
         />
         <Button>Add My Note</Button>

       </Form>
        </div>
    )
}

export default EditNoteDetail

