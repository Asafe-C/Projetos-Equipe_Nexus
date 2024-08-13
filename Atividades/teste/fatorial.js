function calcularFatorial() {
    const numero = document.getElementById('numero').value;
    const resultadoDiv = document.getElementById('resultado');

    if (numero < 1 || numero > 21) {
        resultadoDiv.innerHTML = "Por favor, insira um número entre 1 e 21.";
        return;
    }

    let fatorial = 1;
    let expressao = "";

    for (let i = numero; i > 0; i--) {
        fatorial *= i;
        expressao += i !== 1 ? i + " x " : i + " = " + fatorial;
    }

    resultadoDiv.innerHTML = `<p>Calculando ${numero}!</p><p>${expressao}</p>`;
}
