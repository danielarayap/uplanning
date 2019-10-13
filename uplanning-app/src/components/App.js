import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login"



class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default App;
