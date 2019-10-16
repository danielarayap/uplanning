import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Header extends React.Component {
	render() {
    	return (
			<Navbar bg="primary" variant="dark" className="mb-3">
				<Navbar.Brand href="/" className="mr-auto">uplanning</Navbar.Brand>
				<Nav>
					<NavDropdown alignRight title="Sergio Ochoa" id="navbar-dropdown">
						<NavDropdown.Header>Administrar</NavDropdown.Header>
						<NavDropdown.Item href="/manage">Semestres</NavDropdown.Item>
						<NavDropdown.Item href="/teachers">Profesores</NavDropdown.Item>
						<NavDropdown.Item href="/ramos">Ramos</NavDropdown.Item>
        				<NavDropdown.Divider />
						<NavDropdown.Item href="/calendar">Calendario</NavDropdown.Item>
        				<NavDropdown.Divider />
						<NavDropdown.Item href="#">Cerrar Sesión</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}

export default Header;
