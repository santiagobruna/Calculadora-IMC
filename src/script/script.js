let resultado = document.querySelector("#result");
let infoAdicional = document.querySelector("#info");
const btn = document.querySelector("#btn");


btn.addEventListener("click", calcImc);
function calcImc(event) {
    event.preventDefault();
    const inputName = document.querySelector("#name").value;
    let inputPeso = document.querySelector("#peso").value;
    let inputAltura = document.querySelector("#altura").value;

    // validando a entrada de dados por vírgula
    inputPeso = inputPeso.replace(',', '.');
    inputAltura = inputAltura.replace(',', '.');

    let imc = (inputPeso/ (inputAltura * inputAltura)).toFixed(1);
    let classificacao;
    if(imc < 18.5) {
        classificacao = "Magreza";
    }else if(imc > 18.5 && imc < 24.9) {
      classificacao = "Normal";
    }else if(imc > 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    }else if(imc > 30 && imc < 34.9) {
      classificacao = "Obesidade grau I";
    }else if(imc > 35 && imc < 39.9){
      classificacao = "Obesidade grau II";
    }else {
      classificacao = "Obesidade grau III";
    }
   
    resultado.textContent = `
      ${inputName} seu IMC é de ${imc} e sua classificação é ${classificacao}
    `
      setTimeout(() => {
          // Limpar os campos
          document.querySelector("#name").value = "";
          document.querySelector("#peso").value = "";
          document.querySelector("#altura").value = "";
            // Voltar ao estado normal
            resultado.textContent = "Seu resultado aparecerá aqui...";
      }, 8000);
  
}