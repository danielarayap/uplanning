import React from "react";
import "./css/main.css";

class Course extends React.Component {
  render() {
    const route = this.props.semester + "/" + this.props.code + "-" + this.props.section;

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
    const semester = this.props.match.params.semester;
    const route_a = "/manage/" + semester;

    return (
      <div>
        <a href="/manage">Semestres</a> -> <a href={route_a}>{semester}</a>
        <h4>Cursos {semester}</h4>


        <input id="course-search-bar" type="text" name="course-name"/>
        <button id="course-search-btn">Buscar</button>
        <button>Nuevo Curso</button>

        <Course semester={semester} name="Algoritmos y Estructuras de Datos" section="1" code="CC3001"/>
        <Course semester={semester} name="Algoritmos y Estructuras de Datos" section="2" code="CC3001"/>
        <Course semester={semester} name="Matemáticas Discretas" section="1" code="CC3002"/>
        <Course semester={semester} name="Bases de Datos" section="1" code="CC3003"/>
        <Course semester={semester} name="Electivo" section="1" code="CC7001"/>
      </div>
    )
  }
}