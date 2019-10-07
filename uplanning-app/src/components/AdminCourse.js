import React from "react";

class DifferentDayEvaluation extends React.Component {
  render() {
    const start = this.props.start.split(" ");
    const end = this.props.end.split(" ");

    if (start[0] !== end[0]) {
      return <p>{start[0]} {start[1]} - {end[0]} {end[1]}</p>;
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
      return <p>{start[0]}, {start[1]} - {end[1]}</p>;
    } else {
      return null;
    }
  }
}

class Evaluation extends React.Component {
  render() {
    const name = this.props.name;
    const start = this.props.start;
    const end = this.props.end;

    const route = window.location.pathname + "/" + name.replace(" ", "+");
    return (
      <a class="clickable-div" href={route}>
        <div class="admin-course">
          {name}
          <SameDateEvaluation start={start} end={end} />
          <DifferentDayEvaluation start={start} end={end} />
        </div>
      </a>
    )
  }
}

export default class AdminCourse extends React.Component {
  render() {
    const year = this.props.match.params.year;
    const semester = this.props.match.params.semester;
    const course = this.props.match.params.course;
    const section = this.props.match.params.section;

    const route_semester = "/manage/" + year + "/" + semester;
    const route_course = window.location.pathname;
    const route_new_eval = window.location.pathname + "/new_evaluation";

    const courses_dict = {"CC3001":"Algoritmos y Estructuras de Datos", 
                          "CC3002":"Matemáticas Discretas para la Computación",
                          "CC3003":"Bases de Datos",
                          "CC7001":"Electivo"}
    return (
      <div>
        <a href="/manage">Semestres</a> -> <a href={route_semester}>{year}-{semester}</a> -> <a href={route_course}>{course}-{section}</a>
        <div id="course-info">
          <h4>{courses_dict[course]}</h4>
          <p>Sección {section}
          <br/>
          Profesor: Nombre Profesor
          <br/>
          Horario: <br/>
          Lunes 10:15 - 12:00 <br/>
          Miércoles 10:15 - 12:00 <br/>
          Viernes 10:15 - 12:00
          </p>
        </div>

        <div id="course-desc">
          Descripción de carga para auxiliar/ayudante 
          <br/>
          <input id="desc" type="text"/>
        </div>

        <br/>

        <h5>Evaluaciones</h5>
        <form action={route_new_eval}>
          <input type="submit" value="Nueva Evaluación"/>
        </form>

        <div id="course-evals">
          <h6>Controles</h6>
          <div id="course-controles">
            <Evaluation name="Control 1" start="2019-09-09 10:15" end="2019-09-09 12:00"/>
            <Evaluation name="Control 2" start="2019-11-24 10:15" end="2019-11-24 12:00"/>
          </div>
          <h6>Tareas</h6>
          <div id="course-tareas">
            <Evaluation name="Tarea 1" start="2019-08-20 00:00" end="2019-09-20 23:59"/>
          </div>
        </div>
      </div>
    );
  }
}
