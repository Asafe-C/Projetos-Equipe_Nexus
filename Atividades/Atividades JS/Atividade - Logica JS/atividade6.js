// atividade 6

function estaEntre(n, min, max, inclusivo = false) {
  if (inclusivo) {
    return n >= min && n <= max;
  } else {
    return n > min && n < max;
  }
}
console.log(estaEntre(10, 9, 100)); // true
