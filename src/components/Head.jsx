import React from 'react';
import { Header} from 'semantic-ui-react'
import  NavBar  from './NavBar'
import "../Header.css"






const Head = () => {

    return (
        <Header as='h4' block={'boolean'} size={'small'} color={'olive'} dividing={'bool'}>
           <NavBar/>
           Welcome to PillCheck!
        </Header>
    )
}

export default Head