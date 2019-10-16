import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class NewRamo extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
		};
		this.pathNames = [
			"Administrar", 
			"Crear Ramo"
		];
		this.paths = [
			"manage",
			"new_ramo"
		];
	}

	handleSubmit(event) {
	  event.preventDefault();
	  const data = new FormData(event.target);
	  fetch(process.env.REACT_APP_API_URL + '/ramos/', {
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
							<h4>Crear Ramo</h4>
						</Col>
					</Row>
					<Row className="ml-0">
						<form onSubmit={this.handleSubmit}>
							<Row>
								<Col>
			      					Codigo: 
			      				</Col>
			      			</Row>

							<Row>
								<Col className="mb-3">
			      					<input name="code"/>
			      				</Col>
			      			</Row>

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

			      			<Row>
								<Col>
			      			Numero Semestre: 
			      				</Col>
			      			</Row>

			      			<Row>
								<Col className="mb-3">
			      					<input name="nsemester" type="number" min="1"/>
			      				</Col>
			      			</Row>

			      			<Row>
								<Col>
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

export default NewRamo;

