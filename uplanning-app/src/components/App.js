import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          {/*<Header
            appName={this.props.appName}
            currentUser={this.props.currentUser}
          />
          <Route exact path="/" component={Calendar} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/manage" component={Manager} />
          <Route exact path="/manage/new_semester" component={NewSemester} />
          <Route exact path="/manage/:year/:semester" component={AdminSemester} />
          <Route exact path="/manage/:year/:semester/:course/:section" component={AdminCourse} />*/}
        </div>
      </Router>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default App;
