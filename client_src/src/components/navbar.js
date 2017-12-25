import React from "react";

//import the Link module
import {Link} from "react-router-dom";

//create the navigation
const NavBar = () => (
  
    <nav>
    <p id="close"><i className="fa fa-times" aria-hidden="true"></i></p>
        <ul>
        <li><h2>Meetings Book</h2></li>  
        <li><Link to="/" ><i className="fa fa-home" aria-hidden="true"></i> Home</Link></li>
        <li><Link to="/addMeeting" ><i className="fa fa-plus" aria-hidden="true"></i> Add Meeting</Link></li>
       </ul> 
    </nav>
   
) 

export default NavBar;