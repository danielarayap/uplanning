import React from "react";
import { Alert, Button, Container, Col, Row } from "react-bootstrap";

class SelectSemester extends React.Component {
  render() {
    return (
      <select>
        <option value="semester1">Otoño 2019</option>
        <option value="semester2">Primavera 2018</option>
        <option value="semester3">Otoño 2018</option>
        <option value="semester4">Primavera 2017</option>
        <option value="semester5">Otoño 2017</option>
      </select>
    );
  }
};

export default class NewSemester extends React.Component {
	render() {
		return (
			<Container>
				<Row className="mb-4">
					<Col>
							<h3>Crear Semestre</h3>
					</Col>
				</Row>
				<Row className="mb-4">
					<Col xs={12} md={6}>
						<Alert id="load-semester-alert" variant="primary">
							<h4>Cargar Semestre</h4>
							<input type="file" name="xls-semester"/>
						</Alert>
					</Col>
					<Col xs={12} md={6}>
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
		);
	}
}
