function nm() {
    let x = Number(window.prompt('Qual número deseja analisar?'));
    let calc = document.getElementById('res');
    let db = x * 2;
    let mt = x / 2;
    calc.innerHTML = '<p>Número Analisado: '+x+', o seu dobro é: '+db+' e sua metade é: '+mt+'</p>';
}