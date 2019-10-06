import React from "react";
import { Route, Link } from "react-router-dom";

import Header from "./Header";
import Calendar from "./calendar";
import Manager from "./Manager";
import NewSemester from "./NewSemester";
import AdminSemester from "./AdminSemester";
import AdminCourse from "./AdminCourse";
import NewEvaluation from "./NewEvaluation";


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
        <Route exact path="/" component={Calendar} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/manage" component={Manager} />
        <Route exact path="/manage/new_semester" component={NewSemester} />
        <Route exact path="/manage/:year/:semester" component={AdminSemester} />
        <Route
          exact
          path="/manage/:year/:semester/:course/:section"
          component={AdminCourse}
        />
      </div>
    );
  }
}
