// 10º Questão

function createArray(oldArray) {
    const newArray = [oldArray[0], oldArray[oldArray.length - 1]];
    return newArray;
}

const meuArray2 = [10, 20, 30, 40, 50];
const resultado = createArray(meuArray2);
console.log(resultado);