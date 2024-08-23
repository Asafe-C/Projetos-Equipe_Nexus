let cont = 0;

function nm() {
    let x = window.prompt('Qual seu nome?');
    let nome = document.getElementById('nome');
    nome.innerHTML = '<p>Olá <strong>'+x+'</strong>! É um prazer te conhecer! :D</p>';
}