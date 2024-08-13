function clique() {
    let x  = window.prompt('Dê um nome a sua To-Do List:');
    document.getElementById("titulo").innerText = x;
    if (x === null || x.trim() === ""){
        document.getElementById("titulo").innerText = "Documento Sem Nome" 
    }
    }

function euqilc() {
    let x  = window.prompt('Dê um nome da tarefa:');
    document.getElementById("tarefa").innerText = x;
    if  (x == ""){
        document.getElementById("tarefa").innerText = "Documento Sem Nome" 
    }
    if (x == " "){
        document.getElementById("tarefa").innerText = "Documento Sem Nome" 
    }
    }

let cont = 0;

function novoitem() {
        cont++;
        let novoItem = document.createElement('div');
        let idDoSpan = 'meuSpan' + cont;
        novoItem.innerHTML = `<input type="checkbox" id="C1"> <label for="C1"><span id="${idDoSpan}" onclick="editarTarefa('${idDoSpan}')">Editar</span> </label><img src="-.png" id="oatub" onclick="remover(this)" class="remove"></img>`;
        document.body.insertBefore(novoItem, butao);
    }

function editarTarefa(idDoSpan) {
        let novoTexto = prompt("Defina o nome da tarefa");
        let spanElement = document.getElementById(idDoSpan);
        if (novoTexto === null || novoTexto.trim() === "") {
            spanElement.innerText = "Tarefa sem Nome";
        } else {
            spanElement.innerText = novoTexto;
        }
    }

function remover(botao){
        let elemento = botao.parentNode;;
        elemento.parentNode.removeChild(elemento); 
    }