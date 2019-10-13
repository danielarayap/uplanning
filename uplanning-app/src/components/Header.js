import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const LoggedOutView = props => {
  return (
    <ul className="nav navbar-nav pull-xs-right">

      <li className="nav-link">
        <Link to="/calendar">
          Calendario
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/manage">
          Administrar
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/manage/new_semester">
          Nuevo Semestre
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/manage/2019/2">
          Semestre 2019-2
        </Link>
      </li>

      <li className="nav-link">
          <Link to="/login">
            Login
          </Link>
      </li>

    </ul>
  );
};

class Header extends React.Component {
		render() {
				const handleSelect = eventKey => alert(`selected ${eventKey}`);
    return (
//       <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
//         <div className="container">
//
//          <div className="navbar-brand">
//            uplanning
//          </div>
//
//          <LoggedOutView  />
//
//        </div>
//      </nav>
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="/" className="mr-auto">uplanning</Navbar.Brand>
			<Nav>
				<NavDropdown title="Sergio Ochoa" id="navbar-dropdown">
					<NavDropdown.Item href="/manage">Administrar</NavDropdown.Item>
					<NavDropdown.Item href="/calendar">Calendario</NavDropdown.Item>
				</NavDropdown>
			</Nav>
		</Navbar>
	);
  }
}

export default Header;
