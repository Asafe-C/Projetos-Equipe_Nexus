let cont = 0

function cnt() {
    cont++
    let contador = document.getElementById('clt');
    contador.innerHTML = `<p>O contador está <strong>${cont}</strong> cliques.</p>`;
}

function zr() {
    cont = 0;
    let contador = document.getElementById('clt');
    contador.innerHTML = `<p>O contador está <strong>${cont}</strong> cliques.</p>`;
}