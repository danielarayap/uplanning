import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header";
import Calendar from "./calendar";
import Manager from "./Manager";
import NewSemester from "./NewSemester";
import AdminSemester from "./AdminSemester";
import AdminCourse from "./AdminCourse";
import NewEvaluation from "./NewEvaluation";

class App extends React.Component {
  render() {
    return (
      <Router>
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
          <Route exact path="/manage/:year/:semester/:course/:section" component={AdminCourse} />
        </div>
      </Router>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default App;
