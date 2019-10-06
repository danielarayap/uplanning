import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import exampleEvents from "./exampleEvents";

import "react-big-calendar/lib/css/react-big-calendar.css"

// import "./styles.scss";

const localizer = momentLocalizer(moment);

export default class Calendar extends React.Component {
  render() {
    return (
      <div style={{height: 600}}>
        <BigCalendar
          localizer={localizer}
          events={exampleEvents}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

