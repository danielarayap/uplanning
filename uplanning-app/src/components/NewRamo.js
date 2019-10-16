import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class NewRamo extends React.Component {
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
					<h4>Crear Ramo</h4>
					<form action="http://localhost:8000/ramos/" method="post">
		      			Codigo: <br/>
		      			<input name="code"/>
		      			<br/><br/>

		      			Nombre: <br/>
		      			<input name="name"/>
		      			<br/><br/>

		      			Numero Semestre: <br/>
		      			<input name="nsemester" type="number" min="1"/>
		      			<br/><br/>
						<input type="submit" value="Guardar"/>
						<br/><br/>
					</form>
				</Container>
			</main>
		);
	}
}

export default NewRamo;
