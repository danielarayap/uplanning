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
      			  	<h5>{this.info.course}-{this.info.section}</h5>
	  
					<form action="http://localhost:8000/evaluations/" method="post">
      		  			Tipo: <br/>
				      	<select name="type">
        					<option value="control">Control</option>
        					<option value="tarea">Tarea</option>
		      			</select>
      		  			<br/>

      		  			Título: <br/>
      		  			<input name="name" type="text"/> 
      		  			<br/>     		  			

		     	 		Inicio: <br/>
		     	 		<input name="start-date" type="date"/>
		     	 		<input name="start-time" type="time"/>

		     	 		<br/>
		     	 		Fin: <br/>
		     	 		<input name="finish-date" type="date"/>
		     	 		<input name="finish-time" type="time"/>

		    			<br/><br/>
						<input type="submit" value="Guardar"/>
					</form>
			</Container>
	</main>
    	)
  	}
}
