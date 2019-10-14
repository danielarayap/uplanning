import React from "react";
import { Alert, Button, Container, Col, Row, Form, InputGroup, FormControl } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";
import "../index.css";

class Course extends React.Component {
	render() {
		const name = this.props.name;
		const section = this.props.section;
		const code = this.props.code;
		const route = `${window.location.pathname}/${code}/${section}`;
		return (					
			<Row>
				<Col>
					<a className="clickable-course" href={route}>
						<Alert variant="primary" href="#">	
							<div>
	        	  				{name}, Sección {section}
	          					<br/>
	          					{code}
		        			</div>
	    	  			</Alert>
    	  			</a>
				</Col>
			</Row>		
	    );
  	}
};

export default class AdminSemester extends React.Component {	
	constructor(props) {
		super(props);
		this.info = {
			year: this.props.match.params.year,
			semester: this.props.match.params.semester
		}
		this.pathNames = ["Administrar", this.info.year + "-" + this.info.semester];
		this.paths = ["manage", this.info.year + "/" + this.info.semester];
		this.state = {"courses":[]};
	}

	componentDidMount() {
		fetch('http://localhost:8000/courses').then(res => res.json()).then(
			result => this.setState({
				"courses":result.results.filter(
					item => item.semester.year === parseInt(this.info.year)
							&& item.semester.period === parseInt(this.info.semester))}),
			error => console.log(error));
	}
	
	render() {		
		this.state.courses.sort((a,b) => a.ramo.code.localeCompare(b.ramo.code));
		return (
			<main>
			<AutoBreadcrumb names = {this.pathNames} paths={this.paths}/>
			<Container>
				<Row>
					<Col><h3>Cursos {this.info.year}-{this.info.semester}</h3></Col>
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
						<Button>Nuevo Curso</Button>
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
