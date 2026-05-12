// 2 - Soma com Confirmação

let somaTotal = 0;
let resposta;

do {
    let numero = parseInt(prompt("Digite um número inteiro:"));

    somaTotal += numero;

    resposta = prompt("Deseja inserir outro número? (s/n)").toLowerCase();

} while (resposta === "s");

alert("A soma total é: " + somaTotal);