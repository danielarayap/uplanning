import React from "react";
import { Button, Container, Col, Row, FormControl, Form, FormGroup } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

export default class ManageEvaluation extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		// TODO: Ver si se esta pasando el tipo de evaluacion
		this.info = {
				year: this.props.match.params.year,
  				semester: this.props.match.params.semester,
			  	course: this.props.match.params.course.toUpperCase(),
			  	section: this.props.match.params.section,
			  	name: this.props.match.params.name,
			  	type: this.props.match.params.type
		};

		this.pathNames = [
			"Administrar",
			this.info.year + "-" + this.info.semester,
			this.info.course + "-" + this.info.section,
			"Modificar Evaluación"
		]
		const formattedType = this.info.type.replace(/\s+/g, '-').toLowerCase();
		const formattedName = this.info.name.replace(/\s+/g, '-').toLowerCase();
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			this.info.course + "/" + this.info.section,
			formattedType + "/" + formattedName
		]
		this.state = {"name":this.info.name.replace('-', " ").replace(/^\w/, c => c.toUpperCase())};
	}

	handleChange(e, self) {
		self.setState({"name":e.target.value});
	}

    // Falta conectar esto a la api para tener el nombre del ramo
	render() {
		return (
			<main>
			<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
			<Container>
				<h3>Editar Evaluacion </h3>
  			  	<h5>{this.info.course} #NOMBRE_RAMO, Sección {this.info.section}</h5>
                <br/>

				<Form>      		  			
			      	<FormGroup as={Row} style={{width:"50%"}}>
                        <Form.Label column sm={2}>Tipo</Form.Label>
                        <Col sm={10}>
                        <FormControl as="select">
                            <option value="control">Control</option>
                            <option value="tarea">Tarea</option>
                        </FormControl>
                        </Col>
                    </FormGroup>

                    <FormGroup as={Row} style={{width:"50%"}}>
                        <Form.Label column sm={2}>Título</Form.Label>
                        <Col sm={10}>
                          <Form.Control 
                          	type="text" 
                          	placeholder="Título de la evaluación" 
                          	value={this.state.name}
                          	onChange={e => this.handleChange(e, this)} />
                        </Col>
                    </FormGroup>

                    <FormGroup as={Row} style={{width:"50%"}}>
                        <Form.Label column sm={2}>Fecha</Form.Label>
                        <Col sm={10}>
                          <Form.Control type="date" />
                        </Col>
                    </FormGroup>


                    <Button variant="primary" type="submit">
                        Guardar
                    </Button>
				</Form>
			</Container>
		</main>
    	)
  	}
}
