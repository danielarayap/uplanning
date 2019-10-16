import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class NewTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.path = window.location.pathname;
        this.info = {
            name:this.props.match.params.name
        };
        this.pathNames = [
            "Administrar", 
            "Modificar Profesor"
        ];
        this.paths = [
            "teachers",
            this.info.name
        ];
        this.state = {name:this.info.name.replace('+', ' ')}
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      fetch(process.env.REACT_APP_API_URL + '/teachers/', {
        method: 'POST',
        body: data,
      }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                window.location.href="/agregado"; 
                return response;
            } else {
                console.log('Something went wrong');
                window.location.href="/error"; 
            }
        });
    }

    handleChange(e, self) {
        self.setState({"name":e.target.value});
    }

    render() {
        return (
            <main>
                <AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
                <Container>
                    <Row>
                        <Col>
                            <h4>Editar Profesor</h4>
                        </Col>
                    </Row>
                    <Row className="ml-0">
                        <form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    Nombre: 
                                </Col>
                            </Row>
                            <Row>
                                <Col className="mb-3">
                                <input 
                                    name="name"
                                    value={this.state.name}
                                    onChange={e => this.handleChange(e, this)}/>
                                </Col>
                            </Row>
                            <Row className="ml-0">
                                <Button type="submit">Guardar</Button>
                            </Row>
                        </form>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default NewTeacher;

