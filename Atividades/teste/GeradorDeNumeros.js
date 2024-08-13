function gerarNumero() {
    const numero = Math.floor(Math.random() * 100) + 1;
    const resultadoDiv = document.getElementById('resultado');
    const novoParagrafo = document.createElement('p');
    novoParagrafo.innerHTML = `Acabei de pensar no número <span>${numero}</span>!`;
    resultadoDiv.appendChild(novoParagrafo);
}

function limparResultado() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
}
