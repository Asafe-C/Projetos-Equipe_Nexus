// <--------- 3° Página --------->

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

// 9º Questão
function simboloMais(quantidade) {
    let resultado = '';
    for (let i = 0; i < quantidade; i++) {
        resultado += '+';
    }
    return resultado;
}

const minhaString = simboloMais(5);
console.log(minhaString);

// 10º Questão

function createArray(oldArray) {
    const newArray = [oldArray[0], oldArray[oldArray.length - 1]];
    return newArray;
}

const meuArray2 = [10, 20, 30, 40, 50];
const resultado = createArray(meuArray2);
console.log(resultado);

// 11º Questão

function filtrarArray(array) {
    return array.filter(item => typeof item === "number");
}

const meuArray3 = ['JavaScript', 1, 'Hello World!', 4, 10, '3'];
const resultado2 = filtrarArray(meuArray3);
console.log(resultado2);

// 12º Questão

function objetoArray(objeto) {
    const arrayDeArrays = [];
    for (const chave in objeto) {
        const parChaveValor = [chave, objeto[chave]];
        arrayDeArrays.push(parChaveValor);
    }
    return arrayDeArrays;
}

const meuObjeto = { nome: 'Esdras Felipe', idade: 17, cidade: 'Recife' };
const resultado3 = objetoArray(meuObjeto);
console.log(resultado3);

// <--------- 5° Página --------->

// 16º Questão

function calcularTotalDespesas(produtos) {
    let totalDespesas = 0;

    for (const produto of produtos) {
        totalDespesas += produto.preco;
    }

    return totalDespesas;
}

const meusProdutos = [
    { nome: 'Caneta', categoria: "Material Escolar", preco: 1.99 },
    { nome: 'Lápis', categoria: "Material Escolar", preco: 2},
    { nome: 'Camisa', categoria: "Vestuário", preco: 100},
    { nome: 'Sapato', categoria: "Calçados", preco: 150}
];

const total = calcularTotalDespesas(meusProdutos);  
console.log('Total das Despesas: ', total);

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

// 18º Questão

function calcularAreaTriangulo(base, altura) {
    const area = (base * altura)/2;
    return area.toFixed(2);
}

const baseTriangulo = 10;
const alturaTriangulo = 5;
const areaCalculada = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
console.log("A Área do Triângulo: ", areaCalculada);