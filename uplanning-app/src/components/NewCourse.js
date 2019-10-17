import React from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

export default class NewCourse extends React.Component {
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
		this.state = {"ramos":[], "teachers":[]};
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

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + '/ramos/').then(res => res.json()).then(
            result => this.setState({"ramos":result}),
            error => console.log(error));
        fetch(process.env.REACT_APP_API_URL + '/teachers/').then(res => res.json()).then(
            result => this.setState({"teachers":result}),
            error => console.log(error));
    }

	render() {
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<Form onSubmit={this.handleSubmit}>

					  <Form.Group as={Row}>
					    <Form.Label column sm="2">
					      Ramo
					    </Form.Label>
					    <Col sm="10">
					      <Form.Control as="select">
					      	name="ramo"
					      	{this.state.ramos.map(item => (
					      		<RamoSelect code={item.code} name={item.name} />
					      	))}
					      </Form.Control>
						  <Button href={"/ramos/new_ramo"}>
						    Nuevo Ramo
						  </Button>
						</Col>
					  </Form.Group>

					  <Form.Group as={Row}>
					    <Form.Label column sm="2">
					      Seccion
					    </Form.Label>
					    <Col sm="10">
					      <Form.Control 
					      	name="section"
					      	type="number"
					      />
					    </Col>
					  </Form.Group>

					  <Form.Group as={Row}>
					    <Form.Label column sm="2">
					      Profesor
					    </Form.Label>
					    <Col sm="10">
					      <Form.Control as="select">
					      	name="teacher"
					      	{this.state.teachers.map(item => (
					      		<TeacherSelect name={item.name} />
					      	))}
					      </Form.Control>
						  <Button href={"/teachers/new_teacher"}>
						    Nuevo Profesor
						  </Button>
						</Col>
					  </Form.Group>

					  <Form.Group as={Row}>
					    <Form.Label column sm="2">
					      Descripcion
					    </Form.Label>
					    <Col sm="10">
					      <Form.Control 
					      	name="description"
					      	as="textarea"
					      />
					    </Col>
					  </Form.Group>

					  <Button type="submit">
					    Guardar
					  </Button>
					</Form>
				</Container>
			</main>
		);
	}
}

class RamoSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option>{this.props.code} {this.props.name}</option>
        );
    }
}

class TeacherSelect extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <option>{this.props.name}</option>
        );
    }
}

