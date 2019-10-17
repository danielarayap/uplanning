import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AutoBreadcrumb from "./Breadcrumb";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
var calendar = null;
var calendar_class = null;

class SidebarElement extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={ () => this.props.onChange() }
          checked={this.props.checked}
        />
        {this.props.title}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  render() {
    const { courses, handleChange } = this.props;
    return (
      <div style={{ width: "20%", float: "left" }}>
        <h3>Seleccionar Cursos</h3>
        {courses.map((course, i) => (
          <SidebarElement
            key={ i }
            onChange={ () => handleChange(i) }
            title={`${course.code}-${course.section} ${course.name}`}
            checked={course.checked}
          />
        ))}
      </div>
    );
  }
}

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2019,
      semester: 2,
      courses: [],
    }
    this.pathNames = ["Calendario"];
    calendar_class = this;

    this.createEvents.bind(this);
    this.handleChange.bind(this);
  }

  createEvents(course) {
    const { evaluations, code, section } = course;
    return evaluations.map((evaluation, i) => ({
      title: `${code}-${section} ${evaluation.title}`,
      allDay: false,
      start: new Date(evaluation.date + " 00:00"),
      end: new Date(evaluation.date + " 23:59"),
    }));
  }

  handleChange(i) {
    const courses =  this.state.courses.slice(); // ver tutorial de react
    courses[i].checked = !courses[i].checked;
    this.setState({ courses: courses });
  }

  async componentDidMount() {
    const { year, semester } = this.state;
    const coursesPre = await fetch(
      process.env.REACT_APP_API_URL +
        `/courses?year=${year}
                 &period=${semester}
                 &ordering=ramo__code,section`
    ).then(res => res.json());

    const courses = coursesPre.map(course => ({...course, checked:true}))
    
    this.setState({ courses: courses });
  }

  render() {
    const { courses } = this.state;
    const events = courses
      .filter(course => course.checked)
      .flatMap(course => this.createEvents(course));
    return (
      <main>
        <AutoBreadcrumb names={this.pathNames} />
        <div id="calendar-wrapper">
          <Sidebar courses={courses} handleChange={i => this.handleChange(i)} />
          <div style={{ height: 500 }}>
            <BigCalendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </div>
      </main>
    );
  }
}
