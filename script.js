function escondeDiv(elemento) {
	let selecionado = elemento.options[elemento.selectedIndex].value;
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
	let materiais = document.getElementById("materiais");
	let indiceAtual = materiais.rows.length;
	let linhaAtual = materiais.insertRow(0);

	let codProdProt = linhaAtual.insertCell(-1);
	let descrMaterial = linhaAtual.insertCell(-1);
	let numSerie = linhaAtual.insertCell(-1);
	let qtd = linhaAtual.insertCell(-1);
	let valorUnit = linhaAtual.insertCell(-1);
	let valorTotal = linhaAtual.insertCell(-1);
	let notaFiscalOrigem = linhaAtual.insertCell(-1);

}