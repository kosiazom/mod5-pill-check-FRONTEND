import React from 'react';

import  NavBar  from './NavBar'
import "../Header.css"






const Head = (props) => {
console.log(props)
    return (
        // <Header as='h4' block={'boolean'} size={'small'} color={'olive'} dividing={'bool'}>
        <div>
           <NavBar/>
           Welcome to PillCheck!
           </div>
    )
}

export default Head