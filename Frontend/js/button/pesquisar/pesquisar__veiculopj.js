var inputCpf = document.getElementById("cnpj");
var inputModelo = document.getElementById("modelo");
var inputMarca = document.getElementById("marca");
var inputColor = document.getElementById("color");
var inputPlaca = document.getElementById("placa");
var inputProprietario = document.getElementById("proprietario");

inputCpf.addEventListener("input", () => {
  filter = inputCpf.value.toUpperCase();
  table = document.getElementById("tabela__veiculospj");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[9];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})

inputModelo.addEventListener("input", () => {
  filter = inputModelo.value.toUpperCase();
  table = document.getElementById("tabela__veiculospj");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[6];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})

inputMarca.addEventListener("input", () => {
  filter = inputMarca.value.toUpperCase();
  table = document.getElementById("tabela__veiculospj");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})

inputColor.addEventListener("input", () => {
  filter = inputColor.value.toUpperCase();
  table = document.getElementById("tabela__veiculospj");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})
inputPlaca.addEventListener("input", () => {
  filter = inputPlaca.value.toUpperCase();
  table = document.getElementById("tabela__veiculospj");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[7];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})
inputProprietario.addEventListener("input", () => {
  filter = inputProprietario.value.toUpperCase();
  table = document.getElementById("tabela__veiculospj");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[8];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
})

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
  tdPlaca = document.createElement("td");
  tdProprietario = document.createElement("td");
  tdCnpj = document.createElement("td");

  tdId.innerHTML = veiculo.id;
  tdTipo.innerHTML = veiculo.tipo;
  tdMarca.innerHTML = veiculo.marca;
  tdAnoFabricacao.innerHTML = veiculo.anofabricacao;
  tdCor.innerHTML = veiculo.cor;
  tdNumeroPassageiro.innerHTML = veiculo.numeropassageiro;
  tdModelo.innerHTML = veiculo.modelo;
  tdPlaca.innerHTML = veiculo.placa;
  tdProprietario.innerHTML = veiculo.nomeproprietario;
  tdCnpj.innerHTML = veiculo.cnpj;

  linha.appendChild(tdId);
  linha.appendChild(tdTipo);
  linha.appendChild(tdMarca);
  linha.appendChild(tdAnoFabricacao);
  linha.appendChild(tdCor);
  linha.appendChild(tdNumeroPassageiro);
  linha.appendChild(tdModelo);
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
  const elementColumnPlaca = document.createElement("th");
  const elementColumnProprietario = document.createElement("th");
  const elementColumnCnpj = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnTipo.innerHTML = "Tipo";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnAnoFabricacao.innerHTML = "Ano";
  elementColumnCor.innerHTML = "Cor";
  elementColumnNumeroPassageiro.innerHTML = "Núm. Passag.";
  elementColumnModelo.innerHTML = "Modelo";
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

updateRegistros();
