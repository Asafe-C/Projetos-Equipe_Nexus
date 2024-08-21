// atividade 24

function inverter(obj) {
  let novoObj = {};
  for (let chave in obj) {
    novoObj[obj[chave]] = chave;
  }
  return novoObj;
}

console.log(inverter({ a: 10, b: 8, c: 6 }));
