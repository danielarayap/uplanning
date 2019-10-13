import React from "react";
import { Alert, Button, Container, Col, Row, Form, FormControl, InputGroup, Tooltip, OverlayTrigger} from 'react-bootstrap';
import Octicon, { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";

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
			<Alert variant={this.getVariant()}>
				<Row style={{height: "100%"}} className="align-middle">
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
