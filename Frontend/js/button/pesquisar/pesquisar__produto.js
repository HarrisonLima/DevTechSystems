const buttonPesquisarProduto = document.getElementById(
  "button__pesquisar--produto"
);

buttonPesquisarProduto.addEventListener("click", (event) => {
  event.preventDefault();
  updateRegistros();
  formatTable();
});

function getProdutos(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

const tabela = document.getElementById("tabela__produtos");
const content = document.getElementById("content");
const header = document.getElementById("header");

function adicionaLinha(produto) {
  linha = document.createElement("tr");
  tdId = document.createElement("td");
  tdProduto = document.createElement("td");
  tdUn = document.createElement("td");
  tdMarca = document.createElement("td");
  tdDescricao = document.createElement("td");
  tdId.innerHTML = produto.id;
  tdProduto.innerHTML = produto.produto;
  tdUn.innerHTML = produto.un;
  tdMarca.innerHTML = produto.marca;
  tdDescricao.innerHTML = produto.descricao;

  linha.appendChild(tdId);
  linha.appendChild(tdProduto);
  linha.appendChild(tdUn);
  linha.appendChild(tdMarca);
  linha.appendChild(tdDescricao);

  return linha;
}

function criaColunas(Column) {
  const elementRow = document.createElement("tr");
  const elementColumnId = document.createElement("th");
  const elementColumnProduto = document.createElement("th");
  const elementColumnUn = document.createElement("th");
  const elementColumnMarca = document.createElement("th");
  const elementColumnDescricao = document.createElement("th");

  elementColumnId.innerHTML = "ID";
  elementColumnProduto.innerHTML = "Produto";
  elementColumnUn.innerHTML = "Un";
  elementColumnMarca.innerHTML = "Marca";
  elementColumnDescricao.innerHTML = "Descricao";

  elementRow.appendChild(elementColumnId);
  elementRow.appendChild(elementColumnProduto);
  elementRow.appendChild(elementColumnUn);
  elementRow.appendChild(elementColumnMarca);
  elementRow.appendChild(elementColumnDescricao);
  header.appendChild(elementRow);
  tabela.appendChild(header);
}

function updateRegistros() {
  tabela.innerHTML = "";
  header.innerHTML = "";
  criaColunas();
  let data = getProdutos("http://localhost:3000/api/produtos");
  let produtos = JSON.parse(data);
  produtos.forEach((element) => {
    let linha = adicionaLinha(element);
    tabela.appendChild(linha);
  });
}

function formatTable() {
  tabela.style.border = "1px solid #000000";
  content.style.border = "1px solid #000000";
}