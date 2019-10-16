import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
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
			"teachers",
			"new_teacher"
		];
	}

	handleSubmit(event) {
	  event.preventDefault();
	  const data = new FormData(event.target);
	  fetch(process.env.REACT_APP_API_URL + '/teachers/', {
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
							<h4>Agregar Profesor</h4>
						</Col>
					</Row>
					<Row className="ml-0">
						<form onSubmit={this.handleSubmit}>
							<Row>
								<Col>
									Nombre: 
								</Col>
							</Row>
							<Row>
								<Col className="mb-3">
								<input name="name"/>
								</Col>
							</Row>
							<Row className="ml-0">
								<Button type="submit">Guardar</Button>
							</Row>
						</form>
					</Row>
				</Container>
			</main>
		);
	}
}

export default NewTeacher;

