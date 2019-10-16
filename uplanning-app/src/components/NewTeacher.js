import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class NewTeacher extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
		};
		this.pathNames = [
			"Administrar", 
			"Agregar Profesor"
		];
		this.paths = [
			"manage",
			"new_teacher"
		];
	}

	render() {
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<h4>Agregar Profesor</h4>
					<form action="http://localhost:8000/teachers/" method="post">
						Nombre: <br/>
				      	<input name="name"/>
						<br/><br/>
						<input type="submit" value="Guardar"/>
						<br/><br/>
					</form>
				</Container>
			</main>
		);
	}
}

export default NewTeacher;
