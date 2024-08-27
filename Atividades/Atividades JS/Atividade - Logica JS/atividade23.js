// atividade 23

function removarVogais(frase) {
  let fraseSemVogais = frase.replace(/[aeiou]/gi, "");
  return fraseSemVogais;
}

console.log(removarVogais("kyu hayato"));
