const numero = parseInt(prompt("Digite um número inteiro: "));

if (isNaN(numero)) {
  console.log("Valor inválido. Digite um número inteiro.");
} else if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}

