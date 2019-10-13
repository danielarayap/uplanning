import React from "react";
import { Container } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

export default class NewEvaluation extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
				year: this.props.match.params.year,
  				semester: this.props.match.params.semester,
			  	course: this.props.match.params.course.toUpperCase(),
			  	section: this.props.match.params.section
		};
		this.pathNames = [
			"Administrar",
			this.info.year + "-" + this.info.semester,
			this.info.course + "-" + this.info.section,
			"Nueva Evaluación"
		]
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			this.info.course + "/" + this.info.section,
			"new_evaluation"
		]
	}

	render() {
			return (
				<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<h4>Crear Evaluación</h4>
      			  	<h5>{this.info.course}</h5>
      		  	  	<h5>{this.info.section}</h5>
	  
					<form action="/" method="get">
      		  			Tipo: <br/>
				      	<select>
        					<option value="control">Control</option>
		    				<option value="examen">Examen</option>
        					<option value="tarea">Tarea</option>
		      			</select>
      		  			<br/><br/>
		     	 		Fecha: <br/>
		     	 		<input type="date"/>
		     	 		<br/><br/>
				     	Hora: <br/>
				     	<input type="time"/> a <input type="time"/>
		    			<br/><br/>
						<button type="submit">Guardar</button>
					</form>
			</Container>
	</main>
    	)
  	}
}
