import React from "react";
import { Alert, Button, Container, Col, Row, Form, FormControl, InputGroup } from 'react-bootstrap';
import { Gear, Trashcan, Unfold } from "@primer/octicons-react";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";

export default class AdminTeachers extends React.Component {
    constructor(props) {
        super(props);
        this.pathNames = ['Administrar'];
        this.state = {"teachers":[]};
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + '/teachers/').then(res => res.json()).then(
            result => this.setState({"teachers":result}),
            error => console.log(error));
    }

    render() {
        this.state.teachers.sort();
        return (
            <main>
            <AutoBreadcrumb names={this.pathNames}/>
            <Container>
                <Row>
                    <Col><h3>Todos los profesores</h3></Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form inline className="mr-auto">
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    placeholder="Buscar Profesor"
                                    className="mr-sm-2"
                                />
                                <Button type="submit">Buscar</Button>
                            </InputGroup>
                        </Form>
                    </Col>
                    <Col xs="auto">
                            <Button href="/teachers/new_teacher" className="btn btn-primary">Nuevo Profesor</Button>
                    </Col>
                </Row>
                {this.state.teachers.map(item => (
                    <TeacherItem name={item.name} />
                ))}
            </Container>
            </main>
    );
  }
}

class TeacherItem extends React.Component {
    constructor(props) {
        super(props);
        const formattedName = this.props.name.replace(/\s+/g, '+');
        this.paths = {
            manage: "/teachers/" + formattedName,
            delete: "#"
        }
        this.descriptions = {
            manage: "Modificar profesor",
            delete: "Eliminar profesor"
        };
    }

    render() {
        return (
            <a style={{textDecoration:'none'}} href={this.paths.visualize}>
            <Alert variant="primary">
                <Row>
                    <Col xs="auto">
                        {this.props.name}
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

