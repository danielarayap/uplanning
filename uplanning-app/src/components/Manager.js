import React from "react";
import { Alert, Button, Container, Col, Row, Form, FormControl, InputGroup, Tooltip, OverlayTrigger} from 'react-bootstrap';
import Octicon, { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";

export default class Manager extends React.Component {
	constructor(props) {
		super(props);
		this.pathNames = ['Administrar'];
		this.state = {"semesters":[]};
	}

	componentDidMount() {
		fetch('http://localhost:8000/semesters').then(res => res.json()).then(
			result => this.setState({"semesters":result.results}),
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
			manage: `/manage/${this.props.year}/${this.props.semester}`,
			// TODO: Hay que redirigir al path que muestra el calendario de este semestre
			visualize: "/calendar",
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
			<a class={state_class_dict[this.props.state]} href={this.paths.visualize}>
			<Alert variant={this.getVariant()}>
				<Row>
					<Col xs="auto">
						{this.props.year}-{this.props.semester}
					</Col>
					<Col className="text-center">
						{this.props.state} 
					</Col>
					<Col xs="auto">
						<SemesterButton 
							href={this.paths.visualize}
							icon={Unfold}
							description={this.descriptions.visualize}
						/>
						<SemesterButton
							href={this.paths.manage}
							icon={Gear}
							description={this.descriptions.manage}
						/>
						<SemesterButton
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

class SemesterButton extends React.Component {
	renderTooltip() {
		return <Tooltip>{this.props.description}</Tooltip>;
	}

	render() {
		const marginRight = (this.props.last ? "mr-0" : "mr-2");
		return (
			<OverlayTrigger
				placement="top"
				overlay={this.renderTooltip()}
			>
				<Button href={this.props.href} variant="outline-secondary" className={marginRight}>
					<Octicon icon={this.props.icon} size="medium"/>
				</Button>
			</OverlayTrigger>
		);
	}
}
