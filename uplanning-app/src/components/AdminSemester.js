import React from "react";
import {
	Alert,
	Button,
	Container,
	Col,
	Row,
	Form,
	InputGroup,
	FormControl
} from "react-bootstrap";
import { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";

class Course extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			name: this.props.name,
			section: this.props.section,
			code: this.props.code
		};
		this.paths = {
			manage: this.path + "/" + this.info.code + "/" + this.info.section,
			visualize:
				this.path + "/" + this.info.code + "/" + this.info.section + "/view",
			delete: "#"
		};

		this.descriptions = {
			manage: "Modificar curso",
			visualize: "Visualizar curso",
			delete: "Eliminar curso"
		};
	}

	render() {
		return (
			<a style={{ textDecoration: "none" }} href={this.paths.visualize}>
				<Alert variant="primary" href="#">
					<Row>
						<Col>
							{this.info.name}, Sección {this.info.section}
							<br />
							{this.info.code}
						</Col>
						<Col xs="auto">
							<OptionButton
								href={this.paths.visualize}
								icon={Unfold}
								description={this.descriptions.visualize}
							/>
							<OptionButton
								href={this.paths.manage}
								icon={Gear}
								description={this.descriptions.manage}
							/>
							<OptionButton
								href={this.paths.delete}
								icon={Trashcan}
								description={this.descriptions.delete}
								last={true}
							/>
						</Col>
					</Row>
				</Alert>
			</a>
		);
	}
}

export default class AdminSemester extends React.Component {
	constructor(props) {
		super(props);
		this.path = window.location.pathname;
		this.info = {
			year: this.props.match.params.year,
			semester: this.props.match.params.semester
		};
		this.pathNames = ["Administrar", this.info.year + "-" + this.info.semester];
		this.paths = ["manage", this.info.year + "/" + this.info.semester];
		this.state = { courses: [] };
	}

	async componentDidMount() {
		const { year, semester } = this.info;
		const response = await fetch(
			process.env.REACT_APP_API_URL + `/courses?year=${year}&period=${semester}`
		).then(res => res.json())
		console.log(response)
		const courses = await Promise.all(
			response.map(async course => {
				const {code, name} = await fetch(course.ramo).then(res => res.json());
				return {...course, code: code, name: name};
			})
		)
		console.log(courses)
		this.setState({courses: courses})
	}

	render() {
		// Sort courses by code
		this.state.courses.sort((a, b) => a.code.localeCompare(b.code));
		return (
			<main>
				<AutoBreadcrumb names={this.pathNames} paths={this.paths} />
				<Container>
					<Row>
						<Col>
							<h3>
								Cursos {this.info.year}-{this.info.semester}
							</h3>
						</Col>
					</Row>
					<Row className="mb-3">
						<Col>
							<Form inline className="mr-auto">
								<InputGroup>
									<FormControl
										type="text"
										placeholder="Buscar Curso"
										className="mr-sm-2"
									/>
									<Button type="submit">Buscar</Button>
								</InputGroup>
							</Form>
						</Col>
						<Col md="auto">
							<Button href={this.path + "/new_course"}>Nuevo Curso</Button>
						</Col>
					</Row>
					{this.state.courses.map(item => (
						<Course
							name={item.name}
							section={item.section}
							code={item.code}
						/>
					))}
				</Container>
			</main>
		);
	}
}
