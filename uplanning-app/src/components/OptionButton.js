import React from "react";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import Octicon from "@primer/octicons-react";

class OptionButton extends React.Component {
	renderTooltip() {
		return <Tooltip>{this.props.description}</Tooltip>;
	}

	render() {
		const marginRight = (this.props.last ? "mr-0" : "mr-2");
		return (
			<OverlayTrigger
				placement="top"
				overlay={this.renderTooltip()}
			>
				<Button href={this.props.href} variant="outline-secondary" className={marginRight}>
					<Octicon icon={this.props.icon} size="medium"/>
				</Button>
			</OverlayTrigger>
		);
	}
}

export default OptionButton;