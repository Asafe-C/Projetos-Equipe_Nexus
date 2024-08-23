// atividade 5

function inverso(parametro) {
  if (typeof parametro === "boolean") {
    // Se o parâmetro for booleano, retorna o inverso (negação).
    return !parametro;
  } else if (typeof parametro === "number") {
    // Se o parâmetro for numérico, retorna o número inverso (negativo).
    return -parametro;
  } else {
    // Se o parâmetro não for booleano nem numérico, retorna a mensagem de erro.
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`;
  }
}

// Exemplos de uso:
console.log(inverso(true)); // Retorna false
console.log(inverso("6")); // Retorna "booleano ou número esperados, mas o parâmetro é do tipo string"
console.log(inverso(-2000)); // Retorna 2000
console.log(inverso("programação")); // Retorna "booleano ou número esperados, mas o parâmetro é do tipo string"
