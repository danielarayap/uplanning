import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header";
import Calendar from "./Calendar";
import Manager from "./Manager";
import NewSemester from "./NewSemester";
import AdminSemester from "./AdminSemester";
import AdminCourse from "./AdminCourse";

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
          <Route path="/calendar" component={Calendar} />
          <Route path="/manage" component={Manager} />
          <Route path="/new_semester" component={NewSemester} />
          <Route path="/manage/:semester/:course" component={AdminCourse} />
          <Route path="/manage/:semester" component={AdminSemester} />
        </div>
      </Router>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default App;