import React from "react";
import { Alert, Button, Container, Col, Row, InputGroup } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class SelectSemester extends React.Component {
	render() {
		return (
			<InputGroup>
				<select className="custom-select">
					<option value="semester1">Otoño 2019</option>
       	 	    	<option value="semester2">Primavera 2018</option>
        	    	<option value="semester3">Otoño 2018</option>
			    	<option value="semester4">Primavera 2017</option>
        	    	<option value="semester5">Otoño 2017</option>
	      	    </select>
			</InputGroup>
        );
    }
};


class SelectFile extends React.Component {
	render() {
		return (
			<InputGroup>
				<div class="custom-file">
					<input type="file" class="custom-file-input" id="upload-semester-input"/>
					<label class="custom-file-label" for="upload-semester-input"> Escoger Archivo</label>
				</div>
				<InputGroup.Append>
					<Button variant="outline-secondary bg-light">Subir</Button>
				</InputGroup.Append>
			</InputGroup>
		);
	}
}


export default class NewSemester extends React.Component {
	constructor(props) {
		super(props);
		this.pathNames = ['Administrar', 'Nuevo Semestre'];
	}

	render() {
		return (
			<main>
			<AutoBreadcrumb names={this.pathNames}/>
			<Container>
				<Row className="mb-4">
					<Col>
							<h3>Crear Semestre</h3>
					</Col>
				</Row>
				<Row className="mb-1">
					<Col xs={12} md={6} className="mb-4">
						<Alert id="load-semester-alert" variant="primary">
							<h4>Cargar Semestre</h4>
							<SelectFile/>
						</Alert>
					</Col>
					<Col xs={12} md={6} className="mb-4">
						<Alert id="replicate-semester-alert" variant="primary">
							<h4>Replicar Semestre</h4>
							<SelectSemester/>
						</Alert>
					</Col>
				</Row>
				<Row>
					<Col className="text-right">
						<Button>Previsualizar</Button>
					</Col>
					<Col>
						<Button>Guardar</Button>
					</Col>
				</Row>
			</Container>
			</main>
		);
	}
}
