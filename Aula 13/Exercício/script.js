/*
  Exiba os seguintes dados baseado no input do usuário:

  `Seu nome é: ${nome}<br />`;
  `Seu nome tem ______ letras <br />`;
  `A segunda letra do seu nome é: ______<br />`;
  `Qual o primeiro índice da letra LETRA no seu nome? ______<br />`;
  `Qual o último índice da letra LETRA no seu nome? ______<br />`;
  `As últimas 3 letras do seu nome são: ______<br />`;
  `As palavras do seu nome são: ______<br />`;
  `Seu nome com letras maiúsculas: ______<br />`;
  `Seu nome com letras minúsculas: ______<br />`;
*/

const nome = prompt('Digite seu nome completo:');

document.body.innerHTML = `O seu nome é: <strong> ${nome} <strong /> <br />`;
document.body.innerHTML += `Seu nome tem <strong> ${nome.length} <strong /> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra E no seu nome? <strong> ${nome.indexOf('e')} <strong /> <br />`;
document.body.innerHTML += `Qual o último índice da letra E no seu nome? <strong> ${nome.lastIndexOf('e')} <strong /> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong> ${nome.slice(-3)} <strong /> <br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split(' ')} <strong /> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong> ${nome.toUpperCase()} <strong /> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong> ${nome.toLowerCase()} <strong /> <br />`;
