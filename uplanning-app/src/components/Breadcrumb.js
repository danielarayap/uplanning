import React from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

class AutoBreadcrumb extends React.Component {
	constructor(props) {
		super(props);
		this.length = this.props.names.length;
		this.path = window.location.pathname;
		const defaultPaths = this.path.split("/").filter((s) => {return s !== "";});
		this.values = {
			names: this.props.names,
			paths: (this.props.paths ? this.props.paths : defaultPaths)
		}
	}
	
	renderItem(i) {
		let path = "/" + this.values.paths.slice(0, i+1).join("/");
		if (i+1 === this.length) {
			return (
				<Breadcrumb.Item active href={path}>{this.values.names[i]}</Breadcrumb.Item>
			);
		}

		return (
			<Breadcrumb.Item href={path}>{this.values.names[i]}</Breadcrumb.Item>
		);
	}

	renderItems() {
			return this.values.names.map((value, index) => {
				return this.renderItem(index);
			});
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Breadcrumb>
							{this.renderItems()}
						</Breadcrumb>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default AutoBreadcrumb;
