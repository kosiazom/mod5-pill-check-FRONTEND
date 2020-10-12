import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const NavBar = () => {
 let logout = () => {
     localStorage.clear()
 }
    return(
        <>
        <Menu secondary>

        <Menu.Item>
            <img id="logo-container" src={require("../images/pillcheck-logo.png")} alt="pill-logo" />
        </Menu.Item>

        <Menu.Item position={'right'} >
        <Link to='/login'>Log In</Link>
        </Menu.Item >

        <Menu.Item position={'right'} onClick={logout}>
        LogOut
        </Menu.Item >
       
        </Menu>

        </>


    )
}

export default NavBar