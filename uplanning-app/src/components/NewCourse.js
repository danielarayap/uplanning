import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class NewCourse extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			year: this.props.match.params.year,
			semester: this.props.match.params.semester
		};
		this.pathNames = [
			"Administrar",
			this.info.year + "-" + this.info.semester,
			"Nuevo Curso"
		];
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			"new_course"
		];
	}

	render() {
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<h4>Crear Curso</h4>
					<h5>{this.info.year}-{this.info.semester}</h5>
					<form action="http://localhost:8000/courses/" method="post">
						Semestre: <br/>
				      	<select name="semester" name="semester">
        					<option value="1">Otoño</option>
        					<option value="2">Primavera</option>
		      			</select>
		      			<br/><br/>

						Ramo: <br/>
		            	<select name="ramo">
			            	<option value = "1">CC1001 - Introduccion a la Programacion</option>
		            		<option value = "2">CC5206 - Introduccion a la Mineria de Datos</option>
		            		<option value = "3">CC5401 - Ingenieria de Software II</option>
		            		<option value = "4">CC6204 - Deep Learning</option>
		            	</select>
		            	<a href="/manage/new_ramo"><button type="button">Nuevo Ramo</button></a>
		            	<br/><br/>

						Seccion: <br/>
						<input name="section" type="number" min="1"/>
						<br/><br/>

						Profesor: <br/>
		            	<select name="teacher">
			            	<option value = "1">Nelson Baloian T.</option>
		            		<option value = "2">Aidan Hogan</option>
		            		<option value = "3">Nancy Hitschfeld</option>
		            	</select>
		            	<a href="/manage/new_teacher"><button type="button">Nuevo Profesor</button></a>
						<br/><br/>

						Descripcion: <br/>
						<textarea name="aux_description" rows="5" cols="50"/>
						<br/><br/>
						<input type="submit" value="Guardar"/>
						<br/><br/>
					</form>
				</Container>
			</main>
		);
	}
}

export default NewCourse;

