// atividade 7

function multiplicar(int1, int2) {
  if (int1 && int2 >= 0) {
    let val = Math.imul(int1, int2);
    return val;
  } else {
    console.log("número negativo não é permitido");
  }
}

console.log(multiplicar(2, 4));
