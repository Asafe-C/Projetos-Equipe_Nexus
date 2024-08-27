function menornumero(numeros){
  if (numeros.length === 0) {
    return 'O array está vazio.';
  }
  let menornumero = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menornumero) {
      menornumero = numeros[i];
    }
  }
  return menornumero;
}
console.log(menornumero([1,2,3,4,5]))