// atividade 22

function contarCaractere(caractere, string) {
  return string.split(caractere).length - 1;
}

console.log(contarCaractere("a", "A a A A au"));
