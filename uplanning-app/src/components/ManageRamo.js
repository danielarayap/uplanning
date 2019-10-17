import React from "react";
import { Button, Container, Col, Form, Row } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";

class ManageRamo extends React.Component {
    constructor(props) {
        super(props);
        this.path = window.location.pathname;
        this.info = {
            code:this.props.match.params.code
        };
        this.pathNames = [
            "Administrar", 
            "Modificar Ramo"
        ];
        this.paths = [
            "ramos",
            this.info.code
        ];
        this.state = {code:this.info.code}
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);
      fetch(process.env.REACT_APP_API_URL + '/ramos/', {
        method: 'PUT',
        body: data,
      }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                window.location.href="/agregado"; 
                return response;
            } else {
                console.log('Somthing went wrong');
                window.location.href="/error"; 
            }
        });
    }

    handleChange(e, self) {
        self.setState({"code":e.target.value});
    }

    render() {
        return (
            <main>
                <AutoBreadcrumb names={this.pathNames} paths={this.paths}/>
                <Container>
                    <Form onSubmit={this.handleSubmit}>

                      <Form.Group as={Row}>
                        <Form.Label column sm="2">
                          Codigo
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control 
                            name="code"
                            value={this.state.code}
                            onChange={e => this.handleChange(e, this)}
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Form.Label column sm="2">
                          Nombre
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control 
                            name="name"
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row}>
                        <Form.Label column sm="2">
                          Numero de Semestre
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control as="select" name="nsemester">
                            <option value="5">Quinto</option>
                            <option value="6">Sexto</option>
                            <option value="7">Septimo</option>
                            <option value="8">Octavo</option>
                            <option value="9">Noveno</option>
                            <option value="10">Decimo</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>

                      <Button type="submit">
                        Guardar
                      </Button>
                    </Form>
                </Container>
            </main>
        );
    }
}

export default ManageRamo;

