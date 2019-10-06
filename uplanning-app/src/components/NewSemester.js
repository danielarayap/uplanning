import React from "react";

class SelectSemester extends React.Component {
  render() {
    return (
      <select>
        <option value="semester1">Otoño 2019</option>
        <option value="semester2">Primavera 2018</option>
        <option value="semester3">Otoño 2018</option>
        <option value="semester4">Primavera 2017</option>
        <option value="semester5">Otoño 2017</option>
      </select>
    );
  }
};

export default class NewSemester extends React.Component {
  render() {
    return (
      <div>
        <h2>Crear semestre</h2>

        <form>
			<div>	
				<div id="load-semester">
					<h4>Cargar semestre</h4>
          			<input type="file" name="xls-semester"/>
		        </div>

        		<div id="copy-semester">
					<h4>Replicar semestre</h4>
          			<SelectSemester/>
		        </div>
			</div>
        	<div id="new-semester-buttons">
          		<input id="preview-semester" type="button" value="Previsualizar"/>  
	          	<input id="save-semester" type="submit" value="Guardar"/>
    	    </div>
        </form>
      </div>
    )
  }
}
