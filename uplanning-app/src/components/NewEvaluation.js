import React from "react";
import { Button, Container, Col, Row, FormControl, Form, FormGroup } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

export default class NewEvaluation extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
				year: this.props.match.params.year,
  				semester: this.props.match.params.semester,
			  	course: this.props.match.params.course.toUpperCase(),
			  	section: this.props.match.params.section
		};
		this.pathNames = [
			"Administrar",
			this.info.year + "-" + this.info.semester,
			this.info.course + "-" + this.info.section,
			"Nueva Evaluación"
		]
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			this.info.course + "/" + this.info.section,
			"new_evaluation"
		]
	}
    // Falta conectar esto a la api para tener el nombre del ramo
	render() {
			return (
				<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<h3>Crear Evaluación</h3>
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
                              <Form.Control type="text" placeholder="Título de la evaluación" />
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
