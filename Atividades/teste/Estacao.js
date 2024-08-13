function verificarEstacao() {
    const mes = document.getElementById('mes').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    let estacao;

    switch(mes) {
        case 'dezembro':
        case 'janeiro':
        case 'fevereiro':
            estacao = 'Verão';
            break;
        case 'março':
        case 'abril':
        case 'maio':
            estacao = 'Outono';
            break;
        case 'junho':
        case 'julho':
        case 'agosto':
            estacao = 'Inverno';
            break;
        case 'setembro':
        case 'outubro':
        case 'novembro':
            estacao = 'Primavera';
            break;
        default:
            estacao = 'Mês inválido. Por favor, insira um mês válido.';
    }

    resultadoDiv.innerHTML = `A estação do ano para o mês de ${mes.charAt(0).toUpperCase() + mes.slice(1)} é: <strong>${estacao}</strong>`;
}
