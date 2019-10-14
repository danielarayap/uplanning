import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class VisualizeSemester extends React.Component {
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
			"Calendario"
		];
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			"view"
		];
	}

	render() {
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<Row>
						<Col>
							<h3>Calendario Semestre</h3>
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

export default VisualizeSemester;
