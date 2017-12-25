import React from "react";
import { Switch, Route} from "react-router-dom";

//import the modules
import Main from "./main";
import AddMeetUp from "./addMeetUp";
import MeetUpzDetail from "./meetupdetails";
import EditMeetUp from "./editMeetUp";

//create the routes
//this is where all the components will be passed to the app itself
//so we only need to ADD THE COMPONENTS HERE AND EXPORT
//this piece of code to the app.js

const Routing = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/addMeeting" component={AddMeetUp} />
            <Route exact path="/meeting/:id" component={MeetUpzDetail} />
            <Route exact path="/edit/:id" component={EditMeetUp} />
        </Switch>
    </div>    
) 

export default Routing;