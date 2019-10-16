import React from "react";
import { Button, Container, Col, Row, FormControl, Form, FormGroup } from "react-bootstrap";
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
							<FormGroup as={Row} style={{width:"50%"}}>
                            <Form.Label column sm={2}>Código</Form.Label>
                            <Col sm={10}>
                              <Form.Control type="text" placeholder="CC-XXXX" />
                            </Col>
                        </FormGroup>  

							<FormGroup as={Row} style={{width:"50%"}}>
                            <Form.Label column sm={2}>Nombre</Form.Label>
                            <Col sm={10}>
                              <Form.Control type="text" placeholder="Nombre del curso" />
                            </Col>
                        </FormGroup>  

			      			<FormGroup as={Row} style={{width:"50%"}}>
                            <Form.Label column sm={2}>Número de semestre</Form.Label>
                            <Col sm={10}>
                              <input name="section" type="number" min="1"/>
                            </Col>
                        </FormGroup>  
			      			 <Button variant="primary" type="submit">
                            Guardar
                        </Button>
						</form>
					</Row>
				</Container>
			</main>
		);
	}
}

export default NewRamo;

