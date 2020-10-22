import React, { Component } from 'react';
import '../Footer.css'


const Footer = () => {
    
    
        return ( 
        <div className="footer">
           <div className="center">
                <div className="icons"> 
                    
                    <a href="https://www.linkedin.com/in/kosi-akporji-pharmd/" style={{color:'black'}}><i class="github large icon"></i></a>
                    <a href="https://github.com/kosiazom" style={{color: 'black'}}> <i class="linkedin large icon"></i> </a>

                </div>
                <div>
                    <a href="https://medium.com/@kosiazom" class="foot-tag"><h4>© PillNotes est. 2020, created by Kosi Akporji </h4></a>
                </div>
           </div>
        </div>  );
    
}
 
export default Footer;