import React from "react";
import { Alert, Button, Container, Col, Row, InputGroup } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class SelectSemester extends React.Component {
	constructor(props) {
		super(props);
		this.state = {"semesters":[]};
		this.semester_dict = {"1":"Otoño", "2":"Primavera"};
	}

	componentDidMount() {
		fetch("http://localhost:8000/semesters/").then(
			res => res.json()).then(
			result => this.setState({"semesters":result}),
			error => console.log(error));
	}

	render() {
		return (
			<InputGroup>
				<select className="custom-select">
					{this.state.semesters.map(item =>						
						<option value={item.year + "-" + this.semester_dict[item.period]}>
							{this.semester_dict[item.period] + " " + item.year}
						</option>
					)}
	      	    </select>
			</InputGroup>
        );
    }
};


class SelectFile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			label: "Escoger Archivo",
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.fileInput = React.createRef();
	}

	handleChange(event) {
		// console.log(JSON.stringify(event.target.files));
		this.setState({label: event.target.files[0].name})
	}

	async handleSubmit(event) {
		event.preventDefault();
		let file = this.fileInput.current.files[0]
		console.log("HOLA!!!", file)
		const text = await file.text()
		console.log(text.slice(0, 20))
		try {
			const response = await fetch(
				"http://localhost:8000/upload/",
				{
					method: "POST",
					headers: {
      			'Content-Type': 'application/json'
					},
					body: JSON.stringify({text: text}),
				}
			)
			const responseJson = await response.json()
			console.log(responseJson)
			alert("Exito! Semestre creado tranquilein john wayne")
		} catch (e) {
			alert("Ups, algo salio mal, contactate con mis creadores")
			console.log(e);
		}
		// alert(
		// 	`Selected file - ${
		// 		file.name
		// 	}`
		// );
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<InputGroup>
					<div class="custom-file">
						<input 
							type="file"
							ref={this.fileInput}
							onChange={ this.handleChange }
							class="custom-file-input"
							id="upload-semester-input"
						/>
						<label class="custom-file-label" for="upload-semester-input">
							{this.state.label}
						</label>
					</div>
					<InputGroup.Append>
						<Button type="submit" variant="outline-secondary bg-light">Subir</Button>
					</InputGroup.Append>
				</InputGroup>
			</form>
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
