import React from "react";
import { Alert, Button, Container, Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";
import { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";

class Course extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			name: this.props.name,
			section: this.props.section,
			code: this.props.code
		};
		this.paths = {
			manage: this.path + "/" + this.info.code + "/" + this.info.section,
			visualize: this.path + "/" + this.info.code + "/" + this.info.section + "/view",
			delete: "#"
		};

		this.descriptions = {
			manage: "Modificar curso",
			visualize: "Visualizar curso",
			delete: "Eliminar curso"
		};
	}

	render() {
		return (
			<Alert variant="primary" href="#">
				<Row>
					<Col>						
    	  				{this.info.name}, Sección {this.info.section}
      					<br/>
      					{this.info.code}
					</Col>
					<Col xs="auto">
						<OptionButton 
							href={this.paths.visualize}
							icon={Unfold}
							description={this.descriptions.visualize}
						/>
						<OptionButton
							href={this.paths.manage}
							icon={Gear}
							description={this.descriptions.manage}
						/>
						<OptionButton
							href={this.paths.delete}
							icon={Trashcan}
							description={this.descriptions.delete}
							last={true}
						/>
					</Col>
				</Row>
			</Alert>
	    );
  	}
};

export default class AdminCourses extends React.Component {	
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			year: this.props.match.params.year,
			semester: this.props.match.params.semester
		};
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
						<Button href={this.path + "/new_course"}>Nuevo Curso</Button>
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
