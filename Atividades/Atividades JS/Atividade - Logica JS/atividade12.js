function objArray(obj){
    return Object.entries(obj);
}

console.log(objArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}));

console.log(objArray({
    codigo: 11111,
    preco: 12000
  }));