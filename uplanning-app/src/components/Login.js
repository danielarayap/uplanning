import React from "react";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    const { username, password, submitted } = this.state;
    const { match } = this.props;
    console.log(JSON.stringify(match));
    return (
      <div className="jumbotron">
        <div className="col-md-4 col-md-offset-8">
          <div>
            <h2>Login</h2>
            <form name="form" onSubmit={this.handleSubmit}>
              <div
                className={
                  "form-group" + (submitted && !username ? " has-error" : "")
                }
              >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
              </div>
              <div
                className={
                  "form-group" + (submitted && !password ? " has-error" : "")
                }
              >
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <Link to="/" className="btn btn-link">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
