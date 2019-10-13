import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AutoBreadcrumb from "./Breadcrumb";
import exampleEvents from "./exampleEvents";
import "react-big-calendar/lib/css/react-big-calendar.css"

// import "./styles.scss";

const localizer = momentLocalizer(moment);
var toShowList = [];
var toShowQuery = "";

class Sidebar extends React.Component {
  hideAll(){
    const elements = document.querySelectorAll(".rbc-event-content");
    [...elements].forEach(element => {
      element.parentElement.style.display = "none";
    })
  }
  toggleCourse(curso){
    if(toShowList.some(e => e === curso)){
      for(var i = 0; i < toShowList.length; i++){
        if(toShowList[i] === curso) {
           toShowList.splice(i, 1);
        }
      }
    }
    else{
      toShowList.push(curso);
    }    
  }
  newQuery(){
    toShowQuery = "";
    for(let i = 0; i < toShowList.length; i++){
      toShowQuery += '[title*="';
      toShowQuery += toShowList[i];
      toShowQuery += '"], ';
    }
    toShowQuery = toShowQuery.substring(0, toShowQuery.length - 2);    
  }
  showSelected(){
    if(toShowQuery.length > 0){
      const elements = document.querySelectorAll(toShowQuery);
      [...elements].forEach(element => {
        element.parentElement.style.display = "";
      })
    }    
  }
  myFunction(curso){
    this.hideAll();
    this.toggleCourse(curso);
    this.newQuery();
    this.showSelected();
  }
  render() {
    return (
      <div style={{width: "10%"}, {float: "left"}}>
      <h3>&nbsp;Seleccionar Cursos</h3>
      &nbsp;<input type="checkbox" onClick={() => this.myFunction("CC1000")}/>&nbsp;CC1000 - Herramientas Computacionales para Ingeniería y Ciencias &nbsp;<br/>
      &nbsp;<input type="checkbox" onClick={() => this.myFunction("CC1002")}/>&nbsp;CC1002 - Introducción a la Programación &nbsp;<br/>
      &nbsp;<input type="checkbox" onClick={() => this.myFunction("CC3001")}/>&nbsp;CC3001 - Algoritmos y Estructuras de Datos &nbsp;<br/>
      &nbsp;<input type="checkbox" onClick={() => this.myFunction("CC3101")}/>&nbsp;CC3101 - Matemáticas Discretas para la Computación &nbsp;<br/>
      &nbsp;<input type="checkbox" onClick={() => this.myFunction("CC3002")}/>&nbsp;CC3002 - Metodologías de Diseño y Programación &nbsp;<br/>
      &nbsp;<button onClick={() => this.showSelected()}>Actualizar</button>&nbsp;
      </div>
    );
  }
}

export default class Calendar extends React.Component {
  showSelected(){
    if(toShowQuery.length > 0){
      const elements = document.querySelectorAll(toShowQuery);
      [...elements].forEach(element => {
        element.parentElement.style.display = "";
      })
    }    
  }
  constructor(props) {
    super(props);
    this.pathNames = ['Calendario'];
  }
  render() {
    return (
	  <main>
	  <AutoBreadcrumb names={this.pathNames}/>
	  <div id="calendar-wrapper">
      <Sidebar/>
      <div style={{height: 500}}>
      <BigCalendar
        localizer={localizer}
        events={exampleEvents}
        startAccessor="start"
        endAccessor="end"
        //onRangeChange = {() => this.showSelected()}
        eventPropGetter={
          (event, start, end, isSelected) => {
            let newStyle = {
              display: "none"
            };
            return {
              style: newStyle
            };
          }
        }
      />
      </div>
      </div>
	  </main>
    );
  }
}
