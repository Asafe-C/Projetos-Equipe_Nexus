// 9º Questão
function simboloMais(quantidade) {
    let resultado = '';
    for (let i = 0; i < quantidade; i++) {
        resultado += '+';
    }
    return resultado;
}

console.log(simboloMais(5));