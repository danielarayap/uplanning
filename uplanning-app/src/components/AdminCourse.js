import React from "react";
import { Alert, Button, Container, Form, Row, Col } from "react-bootstrap";


class DifferentDayEvaluation extends React.Component {
  render() {
    const start = this.props.start.split(" ");
    const end = this.props.end.split(" ");

    if (start[0] !== end[0]) {
      return <p>{start[0]} {start[1]} - {end[0]} {end[1]}</p>;
    } else {
      return null;
    }
  }
}

class SameDateEvaluation extends React.Component {
  render() {
    const start = this.props.start.split(" ");
    const end = this.props.end.split(" ");

    if (start[0] === end[0]) {
      return <p>{start[0]}, {start[1]} - {end[1]}</p>;
    } else {
      return null;
    }
  }
}

class Evaluation extends React.Component {
  render() {
    const name = this.props.name;
    const start = this.props.start.replace("T", " ").substr(0, 16);
    const end = this.props.end.replace("T", " ").substr(0, 16);

    return (
    <Row>
      <Col>
        <Alert variant="primary">
          {name}
          <SameDateEvaluation start={start} end={end} />
          <DifferentDayEvaluation start={start} end={end} />
        </Alert>
      </Col>
      </Row>
    )
  }
}

export default class AdminCourse extends React.Component {

  constructor(props) {
    super(props);
    this.info = {
      year: this.props.match.params.year,
      semester: this.props.match.params.semester,
      code: this.props.match.params.course.toUpperCase(),
      section: this.props.match.params.section
    }
    this.state = {"course":{"ramo":{"name":""}},
                  "evaluations":[]};
  }

  componentDidMount() {
    fetch('http://localhost:8000/courses')
    .then(res => res.json())
    .then(
      result => this.setState({
        "course":result.results.filter(
          item => item.semester.year === parseInt(this.info.year)
                  && item.semester.period === parseInt(this.info.semester)
                  && item.ramo.code === this.info.code
                  && item.section === parseInt(this.info.section)),
        "evaluations":this.state.evaluations}),
      error => console.log(error))
    .then(
      fetch('http://localhost:8000/evaluations')
      .then(res => res.json())
      .then(
        result => this.setState({
        "course": this.state.course,
        "evaluations": result.results.filter(
            item => item.course.semester.year === parseInt(this.info.year)
                    && item.course.semester.period === parseInt(this.info.semester)
                    && item.course.ramo.code === this.info.code
                    && item.course.section === parseInt(this.info.section))}),
        error => console.log(error))
    );
  }

  render() {
    const name = this.state.course[0] ? this.state.course[0].ramo.name : "";
    const teacher = this.state.course[0] ? this.state.course[0].teacher.name : "";
    const desc = this.state.course[0] ? this.state.course[0].description : "";

    const route_new_eval = window.location.pathname + "/new_evaluation";

    return (
    <Container>
      <div id="course-info">
        <h4>{this.info.code} - {name}</h4>
        <p>Sección {this.info.section}
        <br/>
        Profesor: {teacher}
        <br/>
        Horario: <br/>
        Lunes 10:15 - 12:00 <br/>
        Miércoles 10:15 - 12:00 <br/>
        Viernes 10:15 - 12:00
        </p>
        <div id="course-desc">
          Descripción de carga para auxiliar/ayudante
          <br/>
          <input id="desc" type="text" value={desc}/>
        </div>

        <br/>

        <h5>Evaluaciones</h5>
        <Form action={route_new_eval}>
          <Button type="submit"> Nueva Evaluación</Button>
        </Form>

        <div id="course-evals">
          <h6>Controles</h6>
          <div id="course-controles">
            {this.state.evaluations.map(item => (
              item.evaluation_type === 1 ? <Evaluation name={item.title} start={item.date} end={item.date}/> : null
            ))}
          </div>
          <h6>Tareas</h6>
          <div id="course-tareas">
            {this.state.evaluations.map(item => (
              item.evaluation_type === 2 ? <Evaluation name={item.title} start={item.date} end={item.date}/> : null
            ))}
          </div>
        </div>
      </div>
    </Container>
    );
  }
}
