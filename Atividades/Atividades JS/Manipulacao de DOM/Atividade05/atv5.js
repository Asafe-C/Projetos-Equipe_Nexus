function nm() {
    let x = Number(window.prompt('Digite o primeiro número que você quer somar:'));
    let y = Number(window.prompt('Agora digite o segundo:'));
    let z = x + y;
    let soma = document.getElementById('sm');
    soma.innerHTML = '<p>A soma de '+x+' e '+y+' é igual a <strong>'+z+'<strong></p>';
}