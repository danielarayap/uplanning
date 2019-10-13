import React from "react";
import { Container } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

export default class ManageEvaluation extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		// TODO: Ver si se esta pasando el tipo de evaluacion
		this.info = {
				year: this.props.match.params.year,
  				semester: this.props.match.params.semester,
			  	course: this.props.match.params.course.toUpperCase(),
			  	section: this.props.match.params.section,
			  	name: this.props.match.params.evaluacionName,
			  	type: this.props.match.params.evaluationType
		};

		this.pathNames = [
			"Administrar",
			this.info.year + "-" + this.info.semester,
			this.info.course + "-" + this.info.section,
			"Modificar Evaluación"
		]
		const formattedType = this.info.type.replace(/\s+/g, '-').toLowerCase();
		const formattedName = this.info.name.replace(/\s+/g, '-').toLowerCase();
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			this.info.course + "/" + this.info.section,
			formattedType + "/" + formattedName + "/edit"
		]
	}

	render() {
			return (
				<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<h4>Editar Evaluacion</h4>
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
