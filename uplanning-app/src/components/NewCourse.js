import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class NewCourse extends React.Component {
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
			"Nuevo Curso"
		];
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			"new_course"
		];
	}

	render() {
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<Row>
						<Col>
							<h3>Crear Curso</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							TODO
						</Col>
					</Row>
				</Container>
			</main>
		);
	}
}

export default NewCourse;
