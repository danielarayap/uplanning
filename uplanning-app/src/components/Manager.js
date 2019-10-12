import React from "react";
import List from  "./List"
import NewSemester from "./NewSemester";
import { Alert, Container, Col, Row } from 'react-bootstrap';

export default class Manager extends React.Component {
  render() {
    return (
    	<Container>
			<Row>
				<h1>Todos los semestres</h1>
			</Row>
			<SemesterItem/>
			<SemesterItem/>
			<SemesterItem/>
		</Container>
    );
  }
}

class SemesterItem extends React.Component {
	render() {
		return (
			<Alert variant="primary">
			<Row variant="primary">
				<Col>
						2020-1
				</Col>
				<Col>
						Por Comenzar
				</Col>
				<Col>
						Opciones
				</Col>
		</Row>
</Alert>
		);
	}
}
