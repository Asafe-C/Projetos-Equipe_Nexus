// 11º Questão

function filtrarArray(array) {
    return array.filter(item => typeof item === "number");
}

const meuArray3 = ['JavaScript', 1, 'Hello World!', 4, 10, '3'];
const resultado2 = filtrarArray(meuArray3);
console.log(resultado2);