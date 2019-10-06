import React from "react";


class List extends React.Component {
	render() {
		return (
			<div>
				<h1>Todos los semestres</h1>
				<input id="semester-search-bar" type="text" name="semester-description"/>
				<button id="semester-search-btn">Buscar</button>
				<button id="semester-create-btn">Nuevo</button>
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
