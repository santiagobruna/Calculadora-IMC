const calcular = document.getElementById('btn')

function imc(){
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('campo-texto')
  
  if(nome != '' && altura != '' && peso != ''){
    const imc = ( peso / (altura * altura)).toFixed(2);
    let classificacao = '';
    if(imc < 18.5){
        classificacao = "Abaixo do peso";
     }else if(imc > 18.5 && imc <= 24.9){
        classificacao = "Normal";
     }else if(imc > 25 && imc <= 29.9){
        classificacao = " Sobrepeso";
     }else if(imc > 30 && imc <= 34.9){
       classificacao = "Obesidade grau I";
     }else if(imc > 35 && imc <= 39.9){
       classificacao = "Obesidade grau II";
     }else{
        classificacao =  "Obesidade grau III"; 
     }
     
    resultado.textContent = `${nome} seu IMC é de ${imc} e sua classificação é ${classificacao} `;
    
  }else{
    resultado.textContent = 'Preencha todos os campos';
  }
}
    
calcular.addEventListener('click', imc);
