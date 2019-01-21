function escondeDiv(elemento) {
	var selecionado = elemento.options[elemento.selectedIndex].value;
	document.getElementById('finalidade-proprio0').style.display = 'none';

	if (selecionado === 'proprio') {
		document.getElementById('finalidade-proprio').style.display = 'block';
		document.getElementById('finalidade-terceiro').style.display = 'none';
	} else {
		document.getElementById('finalidade-terceiro').style.display = 'block';
		document.getElementById('finalidade-proprio').style.display = 'none';
	}
}

function adicionaCampo() {
	var materiais = document.getElementById("materiais");
  var indiceAtual = materiais.rows.length;
  var linhaAtual = materiais.insertRow(0);

  var codProdProt = linhaAtual.insertCell(-1);

  var descrMaterial = linhaAtual.insertCell(-1);
  var numSerie = linhaAtual.insertCell(-1);
  var qtd = linhaAtual.insertCell(-1);
  var valorUnit = linhaAtual.insertCell(-1);
  var valorTotal = linhaAtual.insertCell(-1);
  var notaFiscalOrigem = linhaAtual.insertCell(-1);

  console.log("aaa");
}