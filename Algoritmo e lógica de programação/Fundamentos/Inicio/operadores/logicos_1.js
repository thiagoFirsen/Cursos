let temDinheiroNaConta = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = false;

let resultadoE = "#1 Vai pro Shopping? ";
resultadoE += temDinheiroNaConta && estaEnsolarado;
console.log(resultadoE);

let resultadoOU = "#2 Vai pro Shopping? ";
resultadoOU += estaEnsolarado || carroEstaNaGaragem;
console.log(resultadoOU);

console.log(true ^ false);

console.log(!true);
console.log(!false);
