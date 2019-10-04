import React from "react";


class List extends React.Component {
	render() {
		return (
			<div>
				<ListItem/>
				<ListItem/>
				<ListItem/>
				<ListItem/>
			</div>
		);
	
	}
}


class ListItem extends React.Component {	
	render() {
		return (
			<div className="list-item">
				<ListItemField
					value="2020-1"
					width="20%"
				/>
				<ListItemField
					value="Por comenzar"
					width="50%"
				/>
				<ListItemField
						value="Opciones"
						width="30%"
				/>
			</div>
		);
	}
}


class ListItemField extends React.Component {
	render() {
		return (
			<div className="list-item-field" style={{ width:  this.props.width }}>
				{ this.props.value }	
			</div>
		);
	}
}


export default List;