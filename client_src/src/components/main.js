import React, { Component } from 'react';

//request axios
import axios from "axios";

//import the component part
import MeetUpItem from "./meetupItem";

import {Link} from "react-router-dom";


class Main extends Component {
  constructor(){
    super();
    //set the state
    this.state= {
      meetupz: []
    }
  }
  
  //when the component is mounted do the fetching
  componentDidMount(){
    this.getMeets();
  }

  getMeets(){
    //do the request to the loopback server
    axios.get("http://localhost:3000/api/meetupzs")
    .then(response =>{
  
        //the array has data
        //then add the data to the state
        this.setState({meetupz: response.data});
         
    })
    .catch(err=>{
      console.log("--------------An error ocurred " + err);
    });
  }
  
  
  render() {

    //the meetupItem will be used to wrap the data
    //is just another element, but it will create
    //anther component each time
    const meetupz=this.state.meetupz.map((meetup, index)=>{
        return(
          <div key={meetup.id} className="meetup">              
              <MeetUpItem item={meetup}/>
            </div> 
          
        )
      });
    
//the main return
    return (
      <main className="main">
          <p id="add"><Link to="/addMeeting"><i className="fa fa-plus" aria-hidden="true"></i>Add New Meeting</Link></p>
        <h1><i className="fa fa-address-book" aria-hidden="true"></i> Meeting Book</h1>
        {meetupz}
      </main>
     
     
    );
  }
}

export default Main;
