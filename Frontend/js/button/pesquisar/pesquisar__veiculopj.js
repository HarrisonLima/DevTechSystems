const buttonPesquisarVeiculospj = document.getElementById(
  "button__pesquisar--veiculopj"
);

buttonPesquisarVeiculospj.addEventListener("click", (event) => {
  event.preventDefault();
  updateRegistros();
});

function getVeiculospj(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__veiculospj");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(veiculo) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdTipo = document.createElement("td");
  tdMarca = document.createElement("td");
  tdAnoFabricacao = document.createElement("td");
  tdCor = document.createElement("td");
  tdNumeroPassageiro = document.createElement("td");
  tdModelo = document.createElement("td");
  tdRenavam = document.createElement("td");
  tdFabricante = document.createElement("td");
  tdPlaca = document.createElement("td");
  tdProprietario = document.createElement("td");
  tdCnpj = document.createElement("td");

  tdId.innerHTML = veiculo.id;
  tdTipo.innerHTML = veiculo.tipo;
  tdMarca.innerHTML = veiculo.marca;
  tdAnoFabricacao.innerHTML = veiculo.anoFabricacao;
  tdCor.innerHTML = veiculo.cor;
  tdNumeroPassageiro.innerHTML = veiculo.numeroPassageiro;
  tdModelo.innerHTML = veiculo.modelo;
  tdRenavam.innerHTML = veiculo.renavam;
  tdFabricante.innerHTML = veiculo.fabricante;
  tdPlaca.innerHTML = veiculo.placa;
  tdProprietario.innerHTML = veiculo.proprietario;
  tdCnpj.innerHTML = veiculo.cnpj;

  linha.appendChild(tdId);
  linha.appendChild(tdTipo);
  linha.appendChild(tdMarca);
  linha.appendChild(tdAnoFabricacao);
  linha.appendChild(tdCor);
  linha.appendChild(tdNumeroPassageiro);
  linha.appendChild(tdModelo);
  linha.appendChild(tdRenavam);
  linha.appendChild(tdFabricante);
  linha.appendChild(tdPlaca);
  linha.appendChild(tdProprietario);
  linha.appendChild(tdCnpj);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnTipo = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnAnoFabricacao = document.createElement("th");
  const elementColumnCor = document.createElement("th");
  const elementColumnNumeroPassageiro = document.createElement("th");
  const elementColumnModelo = document.createElement("th");
  const elementColumnRenavam = document.createElement("th");
  const elementColumnFabricante = document.createElement("th");
  const elementColumnPlaca = document.createElement("th");
  const elementColumnProprietario = document.createElement("th");
  const elementColumnCnpj = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnTipo.innerHTML = "Tipo veículo";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnAnoFabricacao.innerHTML = "Ano Fabricação";
  elementColumnCor.innerHTML = "Cor";
  elementColumnNumeroPassageiro.innerHTML = "Número Passageiros";
  elementColumnModelo.innerHTML = "Modelo";
  elementColumnRenavam.innerHTML = "Renavam";
  elementColumnFabricante.innerHTML = "Fabricante";
  elementColumnPlaca.innerHTML = "Placa";
  elementColumnProprietario.innerHTML = "Proprietário";
  elementColumnCnpj.innerHTML = "CNPJ";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnTipo);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnAnoFabricacao);
  elementRow.appendChild(elementColumnCor);
  elementRow.appendChild(elementColumnNumeroPassageiro);
  elementRow.appendChild(elementColumnModelo);
  elementRow.appendChild(elementColumnRenavam);
  elementRow.appendChild(elementColumnFabricante);
  elementRow.appendChild(elementColumnPlaca);
  elementRow.appendChild(elementColumnProprietario);
  elementRow.appendChild(elementColumnCnpj);
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();

  let data = getVeiculospj("http://localhost:3000/api/veiculospj");
  let veiculos = JSON.parse(data);
  veiculos.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}