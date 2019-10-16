import React from "react";
import { Button, Container, Col, Row, FormControl, Form, FormGroup } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

export default class NewFechaEspecial extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
		};
		this.pathNames = [
			"Administrar",
			//this.info.year + "-" + this.info.semester,
			//this.info.course + "-" + this.info.section,
			"Nueva Fecha Especial"
		]
		this.paths = [
			"manage",
			//this.info.year + "/" + this.info.semester,
			"new_fechaespecial"
		]
	}
    // Falta conectar esto a la api para tener el nombre del ramo
	render() {
			return (
				<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<h3>Agregar Fecha Especial</h3>
      			  	
                    <br/>
	  
					<Form>
						<FormGroup as={Row} style={{width:"50%"}}>
                            <Form.Label column sm={2}>Fecha Inicio</Form.Label>
                            <Col sm={10}>
                              <Form.Control type="date" />
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} style={{width:"50%"}}>
                            <Form.Label column sm={2}>Fecha Término</Form.Label>
                            <Col sm={10}>
                              <Form.Control type="date" />
                            </Col>
                        </FormGroup> 
                        <FormGroup as={Row} style={{width:"50%"}}>
                            <Form.Label column sm={2}>Nombre</Form.Label>
                            <Col sm={10}>
                              <Form.Control type="text" placeholder="Nombre descriptivo de la fecha especial" />
                            </Col>
                        </FormGroup>     		  			
				      	<FormGroup as={Row} style={{width:"50%"}}>
                            <Form.Label column sm={2}>Tipo</Form.Label>
                            <Col sm={10}>
                            <FormControl as="select">
                                <option value="control">Feriados</option>
                                <option value="tarea">Vacaciones</option>
                                <option value="tarea">Otros</option>
                            </FormControl>
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
