import React from "react";
import { Alert, Button, Container, Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";
import { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";
import ViewTitle from "./ViewTitle";

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
			visualize: this.path + "/" + this.info.code + "/" + this.info.section + "/view",
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
			<a style={{textDecoration:'none'}} href={this.paths.visualize}>
			<Alert variant="primary" href="#">
				<Row>
					<Col>						
    	  				{this.info.name}, Sección {this.info.section}
      					<br/>
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
};

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
		this.state = {"courses":[]}
	}

	componentDidMount() {
		fetch(process.env.REACT_APP_API_URL + '/courses').then(res => res.json()).then(
			result => this.setState({
				"courses":result.filter(
					item => item.semester.year === parseInt(this.info.year)
							&& item.semester.period === parseInt(this.info.semester))}),
			error => console.log(error));
	}
	
	render() {
		// Sort courses by code
		this.state.courses.sort((a,b) => a.ramo.code.localeCompare(b.ramo.code));
		return (
			<main>
			<AutoBreadcrumb names = {this.pathNames} paths={this.paths}/>
			<Container>
				<ViewTitle>
					Cursos {this.info.year}-{this.info.semester}
				</ViewTitle>
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
					<Course name={item.ramo.name} section={item.section} code={item.ramo.code} />
				))}
			</Container>
			</main>
		);
	}
}
