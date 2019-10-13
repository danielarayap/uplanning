import React from "react";
import "./css/main.css";
import { Alert, Button, Container, Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";

class Course extends React.Component {
  render() {
    const code = this.props.code;
    const section = this.props.section;
    const route = window.location.pathname + "/" + code + "/" + section;

	return (
		<Row>
			<Col>
				<Alert variant="primary" href={route}>
					<div>
        	  			{this.props.name}, Sección {this.props.section}
          				<br/>
          				{this.props.code}
	        		</div>
    	  		</Alert>
			</Col>
		</Row>
    );
  }
};

export default class AdminCourses extends React.Component {
  render() {
    const year = this.props.match.params.year;
    const semester = this.props.match.params.semester;
    const route_semester = window.location.pathname;

    return (
      <Container>
        <a href="/manage">Semestres</a> -> <a href={route_semester}>{year}-{semester}</a>
		
		<Row>
				<Col><h3>Cursos {year}-{semester}</h3></Col>
		</Row>
		<Row className="mb-3">
			<Col>
				<Form inline className="mr-auto">
					<InputGroup>
						<FormControl
							type="text"
							placeholder="Buscar Curso"
							className="mr-sm-2"
						/>
						<Button type="submit">Buscar</Button>
					</InputGroup>
				</Form>
			</Col>
			<Col md="auto">
				<Button>Nuevo Curso</Button>
			</Col>
		</Row>
        <Course name="Algoritmos y Estructuras de Datos" section="1" code="CC3001"/>
        <Course name="Algoritmos y Estructuras de Datos" section="2" code="CC3001"/>
    	<Course name="Matemáticas Discretas para la Computación" section="1" code="CC3002"/>
	    <Course name="Bases de Datos" section="1" code="CC3003"/>
		<Course name="Electivo" section="1" code="CC7001"/>
      </Container>
    );
  }
}
