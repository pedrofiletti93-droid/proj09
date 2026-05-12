// 3 - Jogo de Adivinhação

const numeroSecreto = 7;
let tentativa;
let contador = 0;

do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    contador++;

    if (tentativa !== numeroSecreto) {
        alert("Errado! Tente novamente.");
    }

} while (tentativa !== numeroSecreto);

alert("Parabéns! Você acertou em " + contador + " tentativa(s).");