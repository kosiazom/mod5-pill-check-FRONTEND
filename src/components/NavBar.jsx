import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../navbar.css'


const NavBar = () => {

 
    return(
         
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
<>
        <div class="navbar">
  <div className="logo"><a href="#"><img src={require(`../images/pillnote-4.png`)}/></a></div>
    <Link to='/login'><i class="fa fa-fw fa-user"></i> Login</Link> 
   
        </div>

 </>
    )
}

export default NavBar