// Primeira pergunta: Ano da abolição da escravatura
// Segunda pergunta: Primeiro presidente eleito após a ditadura
// Terceira pergunta: Primeira cidade fundada no Brasil

let name = prompt("Bem-vindo(a)! Qual é o seu nome?");
let elemento = document.getElementById("nome");
elemento.innerHTML = "Olá " + name + ","

let respostasCorretas = [];
let respostasErradas = [];

let inicio = prompt("Deseja iniciar o quiz? \n1: Sim \n2: Não");
if (inicio == 1){
    let resposta1 = prompt("Em qual ano a escravidão foi abolida? \n1: 1866\n2: 1888\n3: 1914");
    if (resposta1 == 2){
      respostasCorretas+="Questão 1"
      console.log(respostasCorretas);
    } else {
      respostasErradas+="Questão 1"
      console.log(respostasErradas);
    }
    let resposta2 = prompt("Qual foi o primeiro presidente eleito após a ditadura? \n1: Tancredo Neves\n2: Fernando Collor\n3: José Sarney");
    if (resposta2 == 1){
      respostasCorretas+="Questão 2"
      console.log(respostasCorretas);
    } else {
      respostasErradas+="Questão 2"
      console.log(respostasErradas);
    } 
    let resposta3 = prompt("Qual foi a primeira cidade fundada no Brasil? \n1: São Vicente\n2: Salvador\n3: João Pessoa");
    if (resposta3 == 1){
        respostasCorretas+="Questão 3"
        console.log(respostasCorretas);
    } else {
        respostasErradas+="Questão 3"
        console.log(respostasErradas);
    }
    
 } else {
  console.log("Ok");
}
    // encerrar quiz

let caixa1 =document.getElementById("Corretas");
caixa1.innerHTML = "Respostas Certas: \n" + respostasCorretas

let caixa2 = document.getElementById("Erradas");
caixa2.innerHTML = "Respostas Erradas: \n" + respostasErradas 







