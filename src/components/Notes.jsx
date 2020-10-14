import React, { useState } from 'react';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"



const Notes = () => {

const [date, setDate] = useState(new Date() )
const [title, setTitle] =useState('')
const [description, setDescription] = useState('')

const handleChange = date => {
    setDate(date)
}

// const today = new Date()
// const  todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

// const handleChange = (e) => {
//  debugger
// }



    return (
         <div>
       <Form>
         <Form.Field 
         control={Input}
         label="Date"
         name="date"
         value={date}
         type="text"
         placeholder='10/12/2015'
         onchange={null}
         />

        <Form.Field 
         control={Input}
         label="Title"
         name="title"
         type="text"
         value={title}
         placeholder='Title'
         onchange={e => setTitle(e.target.value)}
         /> 

        <Form.Field 
         control={TextArea}
         label="Description"
         name="description"
         value={description}
         type="text"
         placeholder='What are you feeling...'
         onchange={e => setDescription(e.target.value)}
         />
         <Button type='submit'>Add My Note</Button>

       </Form>


    
        </div> );
}
 
export default Notes;