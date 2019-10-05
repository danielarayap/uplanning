import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";

const localizer = momentLocalizer(moment);

export default class Calendar extends React.Component {
  render() {
    return (
      <div>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

