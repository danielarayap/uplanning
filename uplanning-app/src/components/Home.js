import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Calendar from "./Calendar";
import Manager from "./Manager";
import NewSemester from "./NewSemester";
import AdminSemester from "./AdminSemester";
import AdminCourse from "./AdminCourse";
import NewCourse from "./NewCourse";
import NewEvaluation from "./NewEvaluation";
import VisualizeSemester from "./VisualizeSemester";
import VisualizeCourse from "./VisualizeCourse";
import ManageEvaluation from "./ManageEvaluation";
import NewTeacher from "./NewTeacher";
import NewRamo from "./NewRamo";
import AdminTeachers from "./AdminTeachers";
import ManageTeacher from "./ManageTeacher";
import AdminRamos from "./AdminRamos";
import ManageRamo from "./ManageRamo";
import NewFechaEspecial from "./NewFechaEspecial"

const NoMatch = ({ match }) => {
  return (
    <h1> Que diablos haces aqui </h1>
  );
}

export default class Home extends React.Component {
  render() {
    const { match } = this.props;
    console.log(JSON.stringify(match));
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />

        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/manage" component={Manager} />
          <Route exact path="/manage/new_semester" component={NewSemester} />
		      <Route exact path="/manage/:year/:semester" component={AdminSemester} />
		      <Route exact path="/manage/:year/:semester/new_course" component={NewCourse} />
		      <Route exact path="/manage/:year/:semester/view" component={VisualizeSemester}/>
		      <Route
            exact
            path="/manage/:year/:semester/:course/:section"
            component={AdminCourse}
          />
          <Route
            exact
            path="/manage/:year/:semester/:course/:section/new_evaluation"
            component={NewEvaluation}
          />
          <Route
            exact
            path="/teachers"
            component={AdminTeachers}
          />
          <Route
            exact
            path="/teachers/:name"
            component={ManageTeacher}
          />
          <Route
            exact
            path="/teachers/new_teacher"
            component={NewTeacher}
          />
          <Route
            exact
            path="/ramos"
            component={AdminRamos}
          />
          <Route
            exact
            path="/ramos/:code"
            component={ManageRamo}
          />
          <Route
            exact
            path="/ramos/new_ramo"
            component={NewRamo}
          />
		      <Route
            exact
            path="/manage/:year/:semester/:course/:section/view"
            component={VisualizeCourse}
		      />
		      <Route
            exact
		        path="/manage/:year/:semester/:course/:section/:type/:name"
            component={ManageEvaluation}
          />
          <Route
            exact
            path="/manage/new_fechaespecial"
            component={NewFechaEspecial}
          />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

