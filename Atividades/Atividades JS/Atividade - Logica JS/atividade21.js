function contarPalavras(frase) {
    const palavras = frase.split(' ');
    return palavras.length;
  }
const minhafrase = 'Tulyo_Zynga esteve aqui';
const numerodepalavras = contarPalavras(minhafrase);
console.log('A sua frase tem', numerodepalavras, 'palavras.');

