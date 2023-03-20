const a = 8;
const b = 4;
const operacao = "*";

const resultado =
  operacao === "+"
    ? a + b
    : operacao === "-"
    ? a - b
    : operacao === "/"
    ? a / b
    : operacao === "*"
    ? a * b
    : 0;

console.log(resultado);
