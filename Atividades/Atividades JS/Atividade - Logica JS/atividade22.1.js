// atividade 22.1

function buscarPalavrasSemelhantes(palavra, array) {
  return array.filter((item) =>
    item.toLowerCase().includes(palavra.toLowerCase())
  );
}
console.log(
  buscarPalavrasSemelhantes("pro", ["programação", "programa", "coisa"])
);
