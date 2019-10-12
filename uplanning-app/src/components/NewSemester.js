import React from "react";
import { Container, Col, Row } from "react-bootstrap";

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
				<Row>
					<Col>
						<h2>Crear Semestre</h2>
					</Col>
				</Row>
				<Row>
					<Col>
						<h4>Cargar Semestre</h4>
						<input type="file" name="xls-semester"/>
					</Col>
					<Col>
						<h4>Replicar Semestre</h4>
						<SelectSemester/>
						<input id="preview-semester" type="button" value="Previsualizar"/>
						<input id="save-semester" type="submit" value="Guardar"/>
					</Col>
				</Row>
			</Container>
		);
	}
}
