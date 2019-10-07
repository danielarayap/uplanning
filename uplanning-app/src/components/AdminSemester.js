import React from "react";
import "./css/main.css";

class Course extends React.Component {
  render() {
    const code = this.props.code;
    const section = this.props.section;
    const route = window.location.pathname + "/" + code + "/" + section;

    return (
      <a class="clickable-div" href={route}>
        <div class="admin-course">
          {this.props.name}, Sección {this.props.section}
          <br/>
          {this.props.code}
        </div>
      </a>
    );
  }
};

export default class AdminCourses extends React.Component {
  render() {
    const year = this.props.match.params.year;
    const semester = this.props.match.params.semester;
    const route_semester = window.location.pathname;

    return (
      <div>
        <a href="/manage">Semestres</a> -> <a href={route_semester}>{year}-{semester}</a>
        <h4>Cursos {year}-{semester}</h4>

        <input id="course-search-bar" type="text" name="course-name"/>
        <button id="course-search-btn">Buscar</button>
        <button>Nuevo Curso</button>

        <Course name="Algoritmos y Estructuras de Datos" section="1" code="CC3001"/>
        <Course name="Algoritmos y Estructuras de Datos" section="2" code="CC3001"/>
        <Course name="Matemáticas Discretas para la Computación" section="1" code="CC3002"/>
        <Course name="Bases de Datos" section="1" code="CC3003"/>
        <Course name="Electivo" section="1" code="CC7001"/>
      </div>
    );
  }
}