const buttonLimparServico = document.getElementById('button__limpar--servico')

buttonLimparServico.addEventListener('click', (event) => {
  event.preventDefault()
  event__buttonLimpar__CadastraServico()
})

function event__buttonLimpar__CadastraServico(){
  var inputServico = document.getElementById("servico");
  var inputDescricao = document.getElementById("descricaoServico");

  inputServico.value = "";
  inputDescricao.value = "";
};