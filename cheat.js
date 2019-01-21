function addField() {
	var materiais = document.getElementById("materiais");
  var currentIndex = materiais.rows.length;
  var currentRow = materiais.insertRow(-1);

  var linksBox = document.createElement("input");
  linksBox.setAttribute("name", "links" + currentIndex);

  var keywordsBox = document.createElement("input");
  keywordsBox.setAttribute("name", "keywords" + currentIndex);

  var violationsBox = document.createElement("input");
  violationsBox.setAttribute("name", "violationtype" + currentIndex);

  var currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(linksBox);

  currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(keywordsBox);

  currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(violationsBox);

  currentCell = currentRow.insertCell(-1);
  currentCell.appendChild(addRowBox);
}