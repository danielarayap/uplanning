import React from "react";
import { Alert, Button, Container, Col, Row, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";

export default class AdminRamos extends React.Component {
    constructor(props) {
        super(props);
        this.pathNames = ['Administrar'];
        this.state = {"ramos":[]};
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + '/ramos/').then(res => res.json()).then(
            result => this.setState({"ramos":result}),
            error => console.log(error));
    }

    render() {
        return (
            <main>
            <AutoBreadcrumb names={this.pathNames}/>
            <Container>
                <Row>
                    <Col><h3>Todos los ramos</h3></Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form inline className="mr-auto">
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Buscar Ramos"
                                    className="mr-sm-2"
                                />
                                <Button type="submit">Buscar</Button>
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col xs="auto">
                            <Button href="/ramos/new_ramo" className="btn btn-primary">Nuevo Ramo</Button>
                    </Col>
                </Row>
                {this.state.ramos.map(item => (
                    <RamoItem code={item.code} name={item.name} />
                ))}
            </Container>
            </main>
    );
  }
}

class RamoItem extends React.Component {
    constructor(props) {
        super(props);
        this.paths = {
            manage: "/ramos/" + this.props.code,
            delete: "#"
        }
        this.descriptions = {
            manage: "Editar ramo",
            delete: "Eliminar ramo"
        };
    }

    render() {
        return (
            <a style={{textDecoration:'none'}} href={this.paths.visualize}>
            <Alert variant="primary">
                <Row>
                    <Col xs="auto">
                        {this.props.code} {this.props.name}
                    </Col>
                    <Col className="text-center"/>
                    <Col xs="auto">
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

