import React from "react";
import { Alert, Button, Container, Row, Col } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";
import { Gear, Trashcan } from "@primer/octicons-react";

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
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			name : this.props.name,
			start: this.props.start,
			end: this.props.end,
			type: this.props.type,
		};
		const formattedType = this.info.type.replace(/\s+/g, '-').toLowerCase();
		const formattedName = this.info.name.replace(/\s+/g, '-').toLowerCase();
		this.paths = {
			manage: this.path + "/" + formattedType + "/" + formattedName + "/edit",
			delete: "#"
		};
		this.descriptions = {
			manage: "Modificar evaluación",
			delete: "Eliminar evaluación"
		};
		
	}

	render() {
		return (
			<Alert variant="primary">
				<Row>
					<Col>
						{this.info.name}
       					<SameDateEvaluation start={this.info.start} end={this.info.end} />
						<DifferentDayEvaluation start={this.info.start} end={this.info.end} />
					</Col>
					<Col xs="auto">
						<OptionButton
							href={this.paths.manage}
							icon={Gear}
							description={this.descriptions.manage}
						/>
						<OptionButton
							href={this.paths.delete}
							icon={Trashcan}
							description={this.descriptions.delete}
						/>
					</Col>
			  	</Row>
			</Alert>
		)
  	}
}

export default class AdminCourse extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			year: this.props.match.params.year,
			semester: this.props.match.params.semester,
			course: this.props.match.params.course.toUpperCase(),
			section: this.props.match.params.section
		}
		this.pathNames = [
			"Administrar", 
			this.info.year + "-" + this.info.semester,
			this.info.course + "-" + this.info.section
		]
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			this.info.course + "/" + this.info.section
		]
	}

	render() {
    	const courses_dict = {"CC3001":"Algoritmos y Estructuras de Datos", 
                          "CC3002":"Matemáticas Discretas para la Computación",
                          "CC3003":"Bases de Datos",
                          "CC7001":"Electivo"}
    	return (
			<main>	
			<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
			<Container>
				<div id="course-info">
         	 	<h4>{courses_dict[this.info.course]}</h4>
          		<p>Sección {this.info.section}
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
				<Button href={this.path + "/new_evaluation"}> Nueva Evaluación</Button>
		        <div id="course-evals">
        			<h6>Controles</h6>
	     	    	<div id="course-controles">
            			<Evaluation name="Control 1" start="2019-09-09 10:15" end="2019-09-09 12:00" type="Control"/>
            			<Evaluation name="Control 2" start="2019-11-24 10:15" end="2019-11-24 12:00" type="Control"/>
          			</div>
          			<h6>Tareas</h6>
          			<div id="course-tareas">
            			<Evaluation name="Tarea 1" start="2019-08-20 00:00" end="2019-09-20 23:59" type="Tarea"/>
  		        	</div>
				</div>
			</div>
		</Container>
		</main>
    );
  }
}
