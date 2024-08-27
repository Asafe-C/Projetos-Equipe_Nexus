function adivinhacao(numero) {
  const numerosorteado = Math.floor(Math.random() * 10) + 1;
  if (numero === numerosorteado) {
    return 'Congratulations! O número sorteado foi o ${numerosorteado}';
  } else {
    return 'Tente novamente! O número sorteado foi o ${numerosorteado}';  
  }
}
console.log(adivinhacao(6))