import React, { Component } from 'react';
import {Link} from "react-router-dom";


//this component will be embedded inside another component
class MeetUpItem extends Component {
 constructor(props){
     super(props);
    //passing the parent prop
     this.state={
         item: props.item
     }
 }
 
    render() {
    return (
       <p><Link to={`/meeting/${this.state.item.id}`}>{this.state.item.name}</Link></p>
      
    );
  }
}

export default MeetUpItem;
