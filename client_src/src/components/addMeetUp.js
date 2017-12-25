import React, { Component } from 'react';
import {Link } from "react-router-dom";

//import axios
import axios from "axios";

class AddMeetUp extends Component {
  constructor(props){
    super(props);
    this.state= {
      message: ""
    }
  }
  

  //retrieve the data from the form
  onSubmit(e){
    e.preventDefault();

    //create an object to store the data
    //get the values using the name of the input and the
    // "refs" property
    const newMeetUp = {
      name : this.refs.meetingName.value,
      address: this.refs.meetingAddress.value,
      city: this.refs.meetingCity.value
    }

    //pass the value
    this.AddMeetUp(newMeetUp);

  }// end of onSubmit



  //this function passes the data to MongoDB
  AddMeetUp(newmeetup){
    console.log(newmeetup); 
    
    //do a post request to the Loopback server
    //to add the data to MongoDb
    axios.request({
      method: "post",
      url: "http://localhost:3000/api/meetupzs",
      data: newmeetup

    }).then((response)=>{
      this.setState({
        message: "The data has been saved!!" 
      });
      
      //display the message
      document.getElementById("message").style.display = "block";

      //clear the form after submitting it
      document.getElementById("meeting-form").reset();
      
    }).catch((error)=>{
      console.log(error);

    });

  }

 

    render() {

    
    return (
      <section className="main">
          <p id="back"><Link to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Go Back</Link></p>
          <h1> <i className="fa fa-plus" aria-hidden="true"></i> Add Meeting</h1>
       <p>Fill the form to add a new Meeting</p>

        <p id="message">{this.state.message}</p>

       <form id="meeting-form" onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="name">Meeting Name / Subject:</label>
          <input type="text" name="meetingName" ref="meetingName" required/>

          <label htmlFor="address">Meeting Address:</label>
          <input type="text" name="meetingAddress" ref="meetingAddress" required />

          <label htmlFor="name">Meeting City:</label>
          <input type="text" name="meetingCity" ref="meetingCity" required />

          <input type="submit" value="Add Meeting" name="submit" />
       </form>
       
      </section>
    );
  }
}

export default AddMeetUp;
