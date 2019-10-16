import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AutoBreadcrumb from "./Breadcrumb";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
var calendar = null;
var calendar_class = null;

class SidebarElement extends React.Component {
  constructor(props) {
    super(props);
    this.info = {
      year: this.props.year,
      semester: this.props.semester,
      code: this.props.code,
      name: this.props.name,
      section: this.props.section
    };
    this.state = { evaluations: [] };
    this.calendar_evals = [];
    this.checked = true;
  }

  componentDidMount() {
    const { year, semester, code, section } = this.info;
    console.log(process.env.REACT_APP_API_URL);
    fetch(
      process.env.REACT_APP_API_URL +
        `/evaluations?year=${year}
                   &period=${semester}
                   &course_code=${code}
                   &course_section=${section}`
    )
      .then(res => res.json())
      .then(
        result => this.setState({ evaluations: result }),
        error => console.log(error)
      );
  }

  handleCheck() {
    this.checked = !this.checked;
    const evaluations = this.state.evaluations.filter(
      item =>
        item.course.ramo.code === this.info.code &&
        item.course.section === this.info.section &&
        item.course.semester.year === this.info.year &&
        item.course.semester.period === this.info.semester
    );

    function belongsToThisCourse(evaluation, self) {
      const f = self.state.evaluations.filter(
        item => item.url === evaluation.url
      );
      return f.length !== 0;
    }

    if (evaluations.length > 0) {
      if (this.checked) {
        this.calendar_evals.map(item => calendar.props.events.push(item));
        this.calendar_evals = [];
      } else {
        calendar.props.events.map(item =>
          belongsToThisCourse(item, this)
            ? this.calendar_evals.push(item)
            : null
        );
        this.calendar_evals.map(item =>
          calendar.props.events.splice(calendar.props.events.indexOf(item), 1)
        );
      }
    }
    calendar_class.forceUpdate();
  }

  render() {
    return (
      <div>
        <input
          type="checkbox"
          onChange={e => this.handleCheck()}
          checked={this.checked}
        />
        {this.info.code}-{this.info.section} {this.info.name}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.info = {
      year: 2019,
      semester: 2
    };
    this.state = { courses: [] };
  }

  componentDidMount() {
    const { year, semester } = this.info;
    fetch(
      process.env.REACT_APP_API_URL +
        `/courses?year=${year}
                 &period=${semester}`
    )
      .then(res => res.json())
      .then(result => this.setState({ courses: result }))
      .catch(error => console.error(error));
  }

  render() {
    // Sort courses by code
    this.state.courses.sort((a, b) => a.ramo.code.localeCompare(b.ramo.code));
    return (
      <div style={{ width: "10%", float: "left" }}>
        <h3>Seleccionar Cursos</h3>

        {this.state.courses.map(item => (
          <SidebarElement
            year={this.info.year}
            semester={this.info.semester}
            code={item.ramo.code}
            section={item.section}
            name={item.ramo.name}
          />
        ))}
      </div>
    );
  }
}

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.info = {
      year: 2019,
      semester: 2
    };
    this.pathNames = ["Calendario"];
    this.state = { evaluations: [] };
    calendar_class = this;
  }

  createEvents(array) {
    let ret = [];
    array.map(evaluation =>
      ret.push({
        id: ret.length,
        title:
          evaluation.course.ramo.code +
          "-" +
          evaluation.course.section +
          " " +
          evaluation.title,
        allDay: false,
        start: new Date(evaluation.date + " 00:00"),
        end: new Date(evaluation.date + " 23:59"),
        shown: true,
        url: evaluation.url
      })
    );
    return ret;
  }

  componentDidMount() {
    const { year, semester } = this.info;
    fetch(
      process.env.REACT_APP_API_URL +
        `/evaluations?year=${year}&period=${semester}`
    )
      .then(res => res.json())
      .then(result =>
        this.setState({
          evaluations: this.createEvents(result)
        })
      )
      .catch(error => console.error(error));
  }

  render() {
    calendar = (
      <BigCalendar
        localizer={localizer}
        events={this.state.evaluations}
        startAccessor="start"
        endAccessor="end"
      />
    );
    return (
      <main>
        <AutoBreadcrumb names={this.pathNames} />
        <div id="calendar-wrapper">
          <Sidebar />
          <div style={{ height: 500 }}>{calendar}</div>
        </div>
      </main>
    );
  }
}
