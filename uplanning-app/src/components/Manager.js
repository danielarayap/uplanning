import React from "react";
import { Alert, Button, Container, Col, Row, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";

export default class Manager extends React.Component {
	constructor(props) {
		super(props);
		this.pathNames = ['Administrar'];
		this.state = {"semesters":[]};
	}

	componentDidMount() {
		fetch('http://localhost:8000/semesters').then(res => res.json()).then(
			result => this.setState({"semesters":result}),
			error => console.log(error));
	}

	render() {
		// Sort semesters by year, then by period (descending)
		this.state.semesters.sort((a,b) => a.year !== b.year ? b.year - a.year : b.period - a.period);
		return (
			<main>
			<AutoBreadcrumb names={this.pathNames}/>
    		<Container>
				<Row>
					<Col><h3>Todos los semestres</h3></Col>
				</Row>
				<Row className="mb-3">
					<Col>
						<Form inline className="mr-auto">
							<InputGroup>
								<FormControl
									type="text"
									placeholder="Buscar Semestre"
									className="mr-sm-2"
								/>
								<Button type="submit">Buscar</Button>
							</InputGroup>
						</Form>
					</Col>
					<Col xs="auto">
							<Button href="/manage/new_semester" className="btn btn-primary">Nuevo Semestre</Button>
					</Col>
				</Row>
				{this.state.semesters.map(item => (
					<SemesterItem year={item.year} semester={item.period} state={state_dict[item.state]} />
				))}
			</Container>
			</main>
    );
  }
}

const state_dict = {"finished":"Finalizado",
					"preparing":"Por comenzar",
					"current":"En curso"};

const state_class_dict = {"Por comenzar":"clickable-semester-unfinished",
						  "En curso":"clickable-semester-open",
						  "Finalizado":"clickable-semester-closed"};

class SemesterItem extends React.Component {
	constructor(props) {
		super(props);
		this.paths = {
			manage: "/manage/" + this.props.year + "/" + this.props.semester,
			visualize: "/manage/" + this.props.year + "/" + this.props.semester + "/view",
			delete: "#"
		}
		this.descriptions = {
			manage: "Modificar semestre",
			visualize: "Visualizar semestre",
			delete: "Eliminar semestre"
		};
	}

	getVariant() {
		switch(this.props.state) {
			case "Por comenzar":
				return "warning";
			case "Finalizado":
				return "secondary";
			default:
				return "success";
		}
	}

	render() {
		return (
			<a style={{textDecoration:'none'}} href={this.paths.visualize}>
			<Alert variant={this.getVariant()}>
				<Row>
					<Col xs="auto">
						{this.props.year}-{this.props.semester}
					</Col>
					<Col className="text-center">
						{this.props.state} 
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

