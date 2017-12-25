import React, { Component } from 'react';
import {Link } from "react-router-dom";

//import axios
import axios from "axios";

class EditMeetUp extends Component {

constructor(props){
    super(props);
    //create the properties
    //that will be populated using the response from axios
    this.state = {
        id : "",
        name: "",
        address: "",
        city: ""
    }

    this.meetingEditHandler= this.meetingEditHandler.bind(this);
}


//populate the form with the meetup data
//make the axios request to get the data using the id
getCurrentMeetingData(){

    //get the id
    let currentMeetingDataId= this.props.match.params.id;

    //do the request to the loopback server
    axios.get(`http://localhost:3000/api/meetupzs/${currentMeetingDataId}` )
    .then((response) =>{
        console.log(response.data);
        //populate the state properties now
        this.setState({
            id: response.data.id,
            name: response.data.name,
            address: response.data.address,
            city: response.data.city
        });    



         
    })
    .catch(err=>{
      console.log("--------------An error ocurred " + err);
    });
  }



componentDidMount(){
    this.getCurrentMeetingData();
}



editMeeting(e){
   e.preventDefault();
   //reference the value of the inputs
   const editedMeetUp = {
    name : this.refs.name.value,
    address: this.refs.address.value,
    city: this.refs.city.value
  }

  console.log(editedMeetUp);
  //functiom that will send the data 
  //to be updated
  this.editMeetingData(editedMeetUp);


}

editMeetingData(meetingData){
    //make the put request
    //using the id that is already store in the state
    axios.request({
        method: "put",
        url: "http://localhost:3000/api/meetupzs/" + this.state.id,
        data: meetingData
  
      }).then((response)=>{
        console.log("data edited");        
      }).catch((error)=>{
        console.log(error);
  
      });
  
  
}



//this function will manage the change event in the input fields
meetingEditHandler(e){
    //get the current target
    const target = e.target;
    // this value will change depending on the target
    // meaning, depending on the input field
    const value= target.value; 
    //the we just get the name for the currently edited input
    const name = target.name;

    //then using a placeholder
    //we change the state of each input
    //remember the [name] will change according to the input being changed
    this.setState({
        [name]: value
    });


}

render() {
   
    return (
      <section className="main">
           <p id="back"><Link to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Go Back</Link></p>
          <h1> <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Meeting Details</h1>

          <form id="meeting-form" onSubmit={this.editMeeting.bind(this)}>
          <label htmlFor="name">New Meeting Name / Subject:</label>
          <input type="text" name="name" ref="name" value={this.state.name} onChange={this.meetingEditHandler} />

          <label htmlFor="address">New Meeting Address:</label>
          <input type="text" name="address" ref="address" value={this.state.address} onChange={this.meetingEditHandler} />

          <label htmlFor="name">New Meeting City:</label>
          <input type="text" name="city" ref="city" value={this.state.city} onChange={this.meetingEditHandler} />

          <input type="submit" value="Edit Meeting" name="EditMeeting" />
       </form> 

      </section>
    );
  }
}

export default EditMeetUp;
