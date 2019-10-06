import React from "react";

export default class NewEvaluation extends React.Component {
  render() {
  	const semester = this.props.match.params.semester;
  	const course = this.props.match.params.course;
  	const evaluation = this.props.match.params.evaluation;
  	const section = this.props.match.params.section;
    return (
      <div>
      <a href="/manage/">Semestres</a> -> <a href="/">{semester}</a> -> <a href="/">{course}</a>
      <h4>Editar Evaluacion</h4>
      <h5>{course}</h5>
      <h5>{section}</h5>
      <h6>{evaluation}</h6>
      <form action="/" method="get">
      Tipo: <br/>
      <select>
        <option value="control">Control</option>
        <option value="examen">Examen</option>
        <option value="tarea">Tarea</option>
      </select>
      <br/><br/>
      Fecha: <br/>
      <input type="date"/>
      <br/><br/>
      Hora: <br/>
      <input type="time"/> a <input type="time"/>
      <br/><br/>
      <button type="submit">Guardar</button>
      </form>
      </div>
    )
  }
}