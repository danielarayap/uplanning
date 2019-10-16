import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
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
			"Crear Curso"
		];
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			"new_course"
		];
	}

	handleSubmit(event) {
	  event.preventDefault();
	  const data = new FormData(event.target);
	  fetch(process.env.REACT_APP_API_URL + '/courses/', {
	    method: 'POST',
	    body: data,
	  }).then(response => {
    		if (response.status >= 200 && response.status < 300) {
        		console.log(response);
        		window.location.href="/agregado"; 
		        return response;
      		} else {
       			console.log('Somthing went wrong');
       			window.location.href="/error"; 
      		}
		});
	}

	render() {
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<Row>
						<Col>
							<h4>Crear Curso</h4>
						</Col>
					</Row>
					<Row>
						<Col>
							<h5>{this.info.year}-{this.info.semester}</h5>
						</Col>
					</Row>
					<Row className="ml-0">
					<form onSubmit={this.handleSubmit}>
						<Row>
						<Col>
						Semestre: 
						</Col>
						</Row>
						<Row>
						<Col className="mb-3">
				      	<select name="semester" name="semester">
        					<option value="1">Otoño</option>
        					<option value="2">Primavera</option>
		      			</select>
		      			</Col>
		      			</Row>

		      			<Row className="ml-0">
						Ramo: 
						</Row>
						<Row>
		      			<Col className="mb-3">
		            	<select name="ramo">
			            	<option value = "1">CC1001 - Introduccion a la Programacion</option>
		            		<option value = "2">CC5206 - Introduccion a la Mineria de Datos</option>
		            		<option value = "3">CC5401 - Ingenieria de Software II</option>
		            		<option value = "4">CC6204 - Deep Learning</option>
		            	</select>
		            	</Col>
		            	<Button href={"/manage/new_ramo"}>Nuevo Ramo</Button>
		            	</Row>

		            	<Row className="ml-0">
						Seccion: 
						</Row>
						<Row>
		      			<Col className="mb-3">
						<input name="section" type="number" min="1"/>
		            	</Col>
		            	</Row>

		            	<Row className="ml-0">
						Profesor: 
						</Row>
						<Row>
		      			<Col className="mb-3">
		            	<select name="teacher">
			            	<option value="1">Nelson Baloian T.</option>
		            		<option value="2">Aidan Hogan</option>
		            		<option value="3">Nancy Hitschfeld</option>
		            	</select>
		            	</Col>
		            	<Button href={"/manage/new_teacher"}>Nuevo Profesor</Button>
		            	</Row>

		            	<Row className="ml-0">
						Descripcion: 
						</Row>
						<Row>
		      			<Col className="mb-3">
						<textarea name="aux_description" rows="3" cols="70"/>
		            	</Col>
		            	</Row>

		            	<Row>
		            	<Col className="mb-3">
		            	<Button type="submit">Guardar</Button>
		            	</Col>
		            	</Row>
					</form>
					</Row>
				</Container>
			</main>
		);
	}
}

export default NewCourse;
