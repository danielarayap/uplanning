import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  return (
    <ul className="nav navbar-nav pull-xs-right">

      <li className="nav-item">
        <Link to="/calendar">
          Calendario
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/manage">
          Administrar
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/new_semester">
          Nuevo Semestre
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/manage/2019-2">
          Semestre 2019-2
        </Link>
      </li>

      <li className="nav-item">
          #USUARIO_PLACEHOLDER
      </li>

    </ul>
  );
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <div className="navbar-brand">
            uplanning
          </div>

          <LoggedOutView  />

        </div>
      </nav>
    );
  }
}

export default Header;
