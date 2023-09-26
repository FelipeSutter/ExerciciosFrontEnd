//alert("alerta abc!");

console.log("Mensagem de console");

//prompt("isso vai mostrar um input do usuário");

// var, let e const

var nome = "Felipe Sutter";

function obterNome() {
  console.log(nome);
}

obterNome();

//objetos

// arrow function
let idade = () => {
  console.log("abc");
};

const pessoa = {
  nome: "Felipe",
  idade: 20,
};

console.log(pessoa);

// array []

const frutas = ["abacaxi", "maça", "laranja"];
//frutas.length - ver tamanho
// frutas.push - adiciona um elemento na ultima posicao do array
// frutas.pop - tira o último elemento do array
// .shift - tira do inicio
// .unshift - bota no inicio

// estrutura de decisão

// === || !== (compara valor e tipo da variavel)

// DESAFIO

// peça dois números ao usuário e calcule e mostre a média

let n1 = parseInt(prompt("Digite o primeiro número"));
let n2 = parseInt(prompt("Digite o segundo número"));
let media = (n1 + n2) / 2;
console.log(`Soma: ${media}`);
window.alert("aaaa");

// map cria um novo array, tem return. o forEach n tem
