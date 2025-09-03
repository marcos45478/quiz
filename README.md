const idade = parseInt(prompt("Digite sua idade: "));

if (isNaN(idade >= 0)) {
  console.log("Valor inválido. Digite uma idade válida.");
} else if (idade <= 12) {
  console.log("criança.");
} else if (idade >= 17 && idade < 64) {
  console.log("Adulto.");
} else if (idade >= 64) {
  console.log("Idoso.");
