import React, { useState } from 'react';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import NotesDetails from './NotesDetails';


const notesUrl = 'http://localhost:3000/api/v1/notes'

const Notes = (props) => {

const [date, setDate] = useState( new Date() )
// const [title, setTitle] = useState("")
const [description, setDescription] = useState("")

const [notesArray, setNotes] = useState([])
// const [currentUser, setCurrentUser] = useState({})

// const handleChange = date => {
//     setDate(date)
// }

// const today = new Date()
// const  todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

// const handleChange = (e) => {
//  debugger
// }

const createNote = (e) => {
    console.log(e.target.date.value)
    e.preventDefault()

    fetch(notesUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
                user_id: localStorage.userID,
                date: e.target.date.value,
                description: e.target.description.value
            
        })
    })
    .then(res => res.json() )
    .then( note =>  setNotes(note))
                  
}


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
        

{/* 
        <Form.Field
         control={Input}
         label="Title"
         name="title"
         type="text"
         value={title}
         placeholder='Title'
         onChange={e => setTitle(e.target.value)}
         />  */}

        <Form.Field 
         control={TextArea}
         label="Description"
         name="description"
         value={description}
         type="text"
         placeholder='What are you feeling...'
         onChange={e => setDescription(e.target.value)}
         />
         <Button type='submit'>Add My Note</Button>

       </Form>

         {notesArray.map(noteObj => <NotesDetails noteObj={noteObj}  />)}
    
        </div> );
}
 
export default Notes;