import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class VisualizeCourse extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			year: this.props.match.params.year,
			semester: this.props.match.params.semester,
			course: this.props.match.params.course.toUpperCase(),
			section: this.props.match.params.section
		}
		this.pathNames = [
			"Administrar", 
			this.info.year + "-" + this.info.semester,
			this.info.course + "-" + this.info.section,
			"Calendario"
		];
		this.paths = [
			"manage",
			this.info.year + "/" + this.info.semester,
			this.info.course + "/" + this.info.section,
			"Calendario"
		];
	}

	render() {
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
				<Container>
					<Row>
						<Col>
							<h3>Calendario Curso</h3>
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

export default VisualizeCourse;
