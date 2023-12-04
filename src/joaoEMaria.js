console.log("modulo joaoEMaria");

let joao = 1;
let maria = 2;

function getJoao() {
  return joao;
}

function getMaria() {
  return maria;
}

function setJoao(x) {
  if (x < 0) {
    joao = 0;
  } else {
    joao = x;
  }
}

function setMaria(x) {
  if (x < 0) {
    maria = 0;
  } else {
    maria = x;
  }
}

function deJoaoParaMaria() {
  maria += joao;
  joao = 0;
}

function deMariaParaJoao() {
  joao += maria;
  maria = 0;
}

export {
  getJoao,
  getMaria,
  setJoao,
  setMaria,
  deJoaoParaMaria,
  deMariaParaJoao,
};
