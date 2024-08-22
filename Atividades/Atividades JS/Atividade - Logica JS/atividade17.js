// 17º Questão

function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    const soma = numeros.reduce((total, numero) => total + numero, 0);
    const media = soma / numeros.length;
    return media;
}

const meuArray4 = [10, 20, 30, 40, 50];
const mediaCalculada = calcularMedia(meuArray4);
console.log("A Média é: ", mediaCalculada);