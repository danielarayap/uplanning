import React from "react";
import { Alert, Button, Container, Col, Row, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";

export default class Manager extends React.Component {
	constructor(props) {
		super(props);
		this.pathNames = ['Administrar'];
	}

	render() {
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
				<SemesterItem year="2020" semester="1" state="Por comenzar"/>
				<SemesterItem year="2019" semester="2" state="En curso"/>
				<SemesterItem year="2019" semester="1" state="Finalizado"/>
				<SemesterItem year="2018" semester="2" state="Finalizado"/>
			</Container>
			</main>
    );
  }
}



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
		);
	}
}

