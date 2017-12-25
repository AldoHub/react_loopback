import React, { Component } from 'react';
//import axios to make the call to the server
import axios from "axios";
import {Link} from "react-router-dom";

class MeetUpzDetail extends Component {
  constructor(){
      super();
      //set the details object
      this.state = {
          details: ""
      }
  }  

  componentDidMount(){
      this.getDetails();
  }


  //delete the meeting 
  deleteMeeting(){
    //get the id of the object to delete
    let meetupId= this.state.details.id;
    //send the delete request
    axios.delete("http://localhost:3000/api/meetupzs/" + meetupId)
    .then((res)=>{
      //redirect once the request was processed
      this.props.history.push("/");
    }).catch((error)=>{
      console.log(error);
    });
  

  }


  //make the axios request to MongoDB
  //get the Id and use that to fetch the information
  getDetails(){
     //get the param (id) from the url
     let $id = this.props.match.params.id;
      axios.get("http://localhost:3000/api/meetupzs/" + $id).then(response =>{
    //add the data to the state
    this.setState({details: response.data});
    console.log(this.state.details);    
    }).catch((err)=>{
        console.log("----- An error ocurred: " + err)
    });
  }
  render() {
  //the main return
    return (
      <section className="main">
        <p id="back"><Link to="/"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Go Back</Link></p>
        
        <h1> <i className="fa fa-calendar" aria-hidden="true"></i> Meeting Details ({this.state.details.name})</h1>
        <div className="details-box">
            <p> <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp; &nbsp; &nbsp;{this.state.details.city}</p>
            <p><i className="fa fa-hand-o-right" aria-hidden="true"></i>&nbsp; &nbsp;{this.state.details.address}</p>
        </div>    
        <div>
          <ul>
            <li><Link to={`/edit/${this.state.details.id}`} >Edit the Meeting</Link></li>
            <li><Link onClick={this.deleteMeeting.bind(this)} to="/delete">Delete the meeting</Link></li>
          </ul>
        </div>

      </section>
     
     
    );
  }
}

export default MeetUpzDetail;
