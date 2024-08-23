// 8º Questão
function repeatNumber(number, repetitions) {
    const resultArray = [];

    for (let i = 0; i < repetitions; i++) {
        resultArray.push(number);
    }

    return resultArray;
}

const meuArray = repeatNumber(7, 3);
console.log(meuArray);