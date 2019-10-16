import React from "react";
import { Alert, Button, Container, Form, Row, Col } from "react-bootstrap";
import AutoBreadcrumb from "./Breadcrumb";
import OptionButton from "./OptionButton";
import ViewTitle from "./ViewTitle";
import { Gear, Trashcan } from "@primer/octicons-react";

class DifferentDayEvaluation extends React.Component {
  render() {
    const start = this.props.start.split(" ");
    const end = this.props.end.split(" ");

    if (start[0] !== end[0]) {
      return (
        <p>
          {start[0]} {start[1]} - {end[0]} {end[1]}
        </p>
      );
    } else {
      return null;
    }
  }
}

class SameDateEvaluation extends React.Component {
  render() {
    const start = this.props.start.split(" ");
    const end = this.props.end.split(" ");

    if (start[0] === end[0]) {
      //return <p>{start[0]}, {start[1]} - {end[1]}</p>;
      return start[0];
    } else {
      return null;
    }
  }
}

class Evaluation extends React.Component {
  constructor(props) {
    super(props);
    this.path = window.location.pathname;
    this.info = {
      name: this.props.name,
      start: this.props.start.replace("T", " ").substr(0, 16),
      end: this.props.end.replace("T", " ").substr(0, 16),
      type: this.props.type
    };
    const formattedType = this.info.type.replace(/\s+/g, "-").toLowerCase();
    const formattedName = this.info.name.replace(/\s+/g, "-").toLowerCase();
    this.paths = {
      manage: this.path + "/" + formattedType + "/" + formattedName + "/edit",
      delete: "#"
    };
    this.descriptions = {
      manage: "Modificar evaluación",
      delete: "Eliminar evaluación"
    };
  }

  render() {
    return (
      <a style={{ textDecoration: "none" }} href={this.paths.manage}>
        <Alert variant="primary">
          <Row>
            <Col>
              {this.info.name}
              <br />
              <SameDateEvaluation start={this.info.start} end={this.info.end} />
              <DifferentDayEvaluation
                start={this.info.start}
                end={this.info.end}
              />
            </Col>
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
              />
            </Col>
          </Row>
        </Alert>
      </a>
    );
  }
}

export default class AdminCourse extends React.Component {
  constructor(props) {
    super(props);
    this.path = window.location.pathname;
    this.info = {
      year: this.props.match.params.year,
      semester: this.props.match.params.semester,
      code: this.props.match.params.course.toUpperCase(),
      section: this.props.match.params.section
    };
    this.pathNames = [
      "Administrar",
      this.info.year + "-" + this.info.semester,
      this.info.code + "-" + this.info.section
    ];
    this.paths = [
      "manage",
      this.info.year + "/" + this.info.semester,
      this.info.code + "/" + this.info.section
    ];
    this.state = {
      name: "",
      description: "",
      teacher: "",
      
      evaluations: []
    };
  }

  async componentDidMount() {
    console.log(this.info);
    const { year, semester, code, section } = this.info;
    /* traer: curso -> ramo, profe
          traer: todas las evaluaciones de curso.
       */
    const responses = await Promise.all([
      fetch(
        process.env.REACT_APP_API_URL +
          `/courses?year=${year}
                   &period=${semester}
                   &code=${code}
                   &section=${section}`
      ),
      fetch(
        process.env.REACT_APP_API_URL +
          `/evaluations?year=${year}
                       &period=${semester}
                       &course_code=${code}
                       &course_section=${section}`
      )
    ]);
    const [ [ courseJson ], evalsJson ] = await Promise.all(
      responses.map(res => res.json())
    );

    console.log("El curso", courseJson);
    console.log("Evaluaciones", evalsJson);

    fetch(courseJson.ramo)
      .then(res => res.json())
      .then(resJson => this.setState({}))
    // const {}

    this.setState({
      course: courseJson,
      evaluations: evalsJson,
    });

    // fetch(process.env.REACT_APP_API_URL + "/courses")
    //   .then(res => res.json())
    //   .then(
    //     result =>
    //       this.setState({
    //         course: result,
    //         evaluations: this.state.evaluations
    //       }),
    //     error => console.log(error)
    //   )
    //   .then(
    //     fetch(process.env.REACT_APP_API_URL + "/evaluations")
    //       .then(res => res.json())
    //       .then(
    //         result =>
    //           this.setState({
    //             course: this.state.course,
    //             evaluations: result
    //           }),
    //         error => console.log(error)
    //       )
    //   );
  }

  render() {
    const { name, teacher, description } = this.state;

    return (
      <main>
        <AutoBreadcrumb names={this.pathNames} paths={this.paths} />
        <Container>
          <div id="course-info">
            <h4>
              {this.info.code} - {name}
            </h4>
            <p>
              Sección {this.info.section}
              <br />
              Profesor: {teacher}
              <br />
              Horario: <br />
              Lunes 10:15 - 12:00 <br />
              Miércoles 10:15 - 12:00 <br />
              Viernes 10:15 - 12:00
            </p>
            <div id="course-desc">
              Descripción de carga para auxiliar/ayudante
              <br />
              <textarea
                name="desc"
                value={description}
                cols="100"
                rows="7"
                style={{ resize: "none" }}
              />
            </div>
            <br />

            <h5>Evaluaciones</h5>
            <Button href={this.path + "/new_evaluation"}>
              {" "}
              Nueva Evaluación
            </Button>
            <div id="course-evals">
              <h6>Controles</h6>
              <div id="course-controles">
                {this.state.evaluations.map(item =>
                  item.evaluation_type === 1 ? (
                    <Evaluation
                      type="control"
                      name={item.title}
                      start={item.date}
                      end={item.date}
                    />
                  ) : null
                )}
              </div>
              <h6>Tareas</h6>
              <div id="course-tareas">
                {this.state.evaluations.map(item =>
                  item.evaluation_type === 2 ? (
                    <Evaluation
                      type="tarea"
                      name={item.title}
                      start={item.date}
                      end={item.date}
                    />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>
    );
  }
}
