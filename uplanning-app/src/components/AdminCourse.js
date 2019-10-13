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
    const start = this.props.start;
    const end = this.props.end;

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
  render() {
    const course = this.props.match.params.course;
    const section = this.props.match.params.section;

    const route_new_eval = window.location.pathname + "/new_evaluation";

    const courses_dict = {"CC3001":"Algoritmos y Estructuras de Datos", 
                          "CC3002":"Matemáticas Discretas para la Computación",
                          "CC3003":"Bases de Datos",
                          "CC7001":"Electivo"}
    return (
		<Container>
		<div id="course-info">
          <h4>{courses_dict[course]}</h4>
          <p>Sección {section}
          <br/>
          Profesor: Nombre Profesor
          <br/>
          Horario: <br/>
          Lunes 10:15 - 12:00 <br/>
          Miércoles 10:15 - 12:00 <br/>
          Viernes 10:15 - 12:00
          </p>
        <div id="course-desc">
          Descripción de carga para auxiliar/ayudante 
          <br/>
          <input id="desc" type="text"/>
        </div>

        <br/>

        <h5>Evaluaciones</h5>
        <Form action={route_new_eval}>
			<Button type="submit"> Nueva Evaluación</Button>
		</Form>

        <div id="course-evals">
          <h6>Controles</h6>
          <div id="course-controles">
            <Evaluation name="Control 1" start="2019-09-09 10:15" end="2019-09-09 12:00"/>
            <Evaluation name="Control 2" start="2019-11-24 10:15" end="2019-11-24 12:00"/>
          </div>
          <h6>Tareas</h6>
          <div id="course-tareas">
            <Evaluation name="Tarea 1" start="2019-08-20 00:00" end="2019-09-20 23:59"/>
          </div>
  </div>
</div>
		</Container>

    );
  }
}
