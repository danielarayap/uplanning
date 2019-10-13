import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AutoBreadcrumb from "./Breadcrumb";
import exampleEvents from "./exampleEvents";
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment);

export default class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.pathNames = ['Calendario'];
	}

	render() {
		return (
			<main>
		  	<AutoBreadcrumb names={this.pathNames}/>
	      	<div id="calendar-wrapper">
          		<BigCalendar
		   	   		localizer={localizer}
			   		events={exampleEvents}
			   		startAccessor="start"
			   		endAccessor="end"
          			/>
      		</div>
			</main>
		);
	}	
}

