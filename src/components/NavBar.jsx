import React from 'react'
import { Menu } from 'semantic-ui-react'







const NavBar = () => {

    return(
        <>
        <Menu secondary>

        <Menu.Item>
            <img id="logo-container" src="./images/pillcheck-logo.png" alt="pill-logo" />
        </Menu.Item>

        <Menu.Item position={'right'} >
         Logout
        </Menu.Item >
      
       
        </Menu>

        </>


    )
}

export default NavBar