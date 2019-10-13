import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


class Header extends React.Component {
	render() {
    	return (
			<Navbar bg="primary" variant="dark" className="mb-3">
				<Navbar.Brand href="/" className="mr-auto">uplanning</Navbar.Brand>
				<Nav>
					<NavDropdown title="Sergio Ochoa" id="navbar-dropdown">
						<NavDropdown.Item href="/manage">Administrar</NavDropdown.Item>
						<NavDropdown.Item href="/calendar">Calendario</NavDropdown.Item>
						<NavDropdown.Item href="#">Cerrar Sesión</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar>
		);
	}
}

export default Header;
