function nm() {
    let x = Number(window.prompt('Digite um número que você deseja analisar:'));
    let va = Math.abs(x)
    let pi = Math.trunc(x)
    let vp = Math.round(x)
    let rq = Math.sqrt(x)
    let rc = x ** (1/3) //Sei que também tem a função Math.cbrt(), mas fiz desse jeito para mostrar outra forma de fazer.
    let e2 = x ** 2
    let e3 = x ** 3

    let analise = document.getElementById('an');
    analise.innerHTML = `<h3>Número Analisado</h3><p class="numero">${x}</p><br><p>Seu valor absoluto: ${va}</p><p>Sua parte inteira é: ${pi}</p><p>O valor inteiro mais próximo é: ${vp}</p><p>Sua raiz quadrada é: ${rq}</p><p>Sua raiz cúbica é: ${rc}</p><p>Seu valor elevado a segunda potência é: ${e2}</p><p>Seu valor elevado a terceira potência é: ${e3}</p>`;
}