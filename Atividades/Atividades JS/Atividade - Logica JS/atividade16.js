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