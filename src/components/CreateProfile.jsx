import React, { useState} from 'react';

const userURL = "http://localhost:3000/api/v1/users"

function CreateProfile (){

    const [firstName, setFirstName] = useState(" ");  
    const [lastName, setLastName] = useState(" ");
    const [userName, setUserName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    

  


    return ( <div>

 SignUp page


    </div> );
}
 
export default CreateProfile;