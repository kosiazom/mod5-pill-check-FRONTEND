import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../navbar.css'


const NavBar = () => {

 let logout = () => {
     localStorage.clear()
 }
    return(
        // <>
        // <Menu secondary>

        // <Menu.Item>
        //     <img id="logo-container" src={null} alt="pill-logo" />
        // </Menu.Item>

        // <Menu.Item position={'right'} >
        // <Link to='/login'>Log In</Link>
        // </Menu.Item >

        // <Menu.Item position={'right'} onClick={logout}>
        // LogOut
        // </Menu.Item >
       
        // </Menu>

        // </>

        <div class="navbar">
  
  <Link to='/login'><i class="fa fa-fw fa-user"></i> Login</Link>
</div>


    )
}

export default NavBar