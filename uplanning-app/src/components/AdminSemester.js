import React from "react";
import "./css/main.css";
import { Alert, Button, Container, Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class Course extends React.Component {
	render() {
		return (
			<Row>
				<Col>
					<Alert variant="primary" href="#">
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
	constructor(props) {
		super(props);
		this.info = {
			year: this.props.match.params.year,
			semester: this.props.match.params.semester
		}
		this.pathNames = ["Administrar", this.info.year + "-" + this.info.semester];
		this.paths = ["manage", this.info.year + "/" + this.info.semester];
	}
	
	render() {
		return (
			<main>
			<AutoBreadcrumb names = {this.pathNames} paths={this.paths}/>
			<Container>
				<Row>
					<Col><h3>Cursos {this.info.year}-{this.info.semester}</h3></Col>
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
			</main>
		);
	}
}
