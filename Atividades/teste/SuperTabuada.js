function gerarTabuada() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');
    
    if (numero === "") {
        resultadoDiv.innerHTML = "Por favor, insira um número.";
        return;
    }

    let tabuada = `<h2>Tabuada de ${numero}</h2>`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `<p>${numero} x ${i} = <strong>${numero * i}</strong></p>`;
    }

    resultadoDiv.innerHTML = tabuada;
}
