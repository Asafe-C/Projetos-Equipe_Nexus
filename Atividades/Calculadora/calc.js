let i = 0
let arr = ['', '']
let val = Number()
let op = ''

function colocarNumero(numero) {
    arr[i] = arr[i] + numero
    let v = document.getElementById('tela');
    v.innerHTML = `${arr[i]}`;
}

function virg(){
    arr[i] = arr[i] + '.'
    let v = document.getElementById('tela');
    v.innerHTML = `${arr[i]}`;
}

function ope(operacao) {
    i++
    if (i == 2){
        i--
        op = operacao
        let v = document.getElementById('tela');
        v.innerHTML = `${0}`
    }
    else{
        op = operacao
        let v = document.getElementById('tela');
        v.innerHTML = `${0}`  
    }
}

function ac(){
    i = 0
    arr[0] = ''
    arr[1] = ''
    let v = document.getElementById('tela');
    v.innerHTML = `${0}`

}

function valor() {
    let v = document.getElementById('tela');
    i = 0
    if (op == 'soma'){
        val = Number(arr[0]) + Number(arr[1])
    }
    if (op == 'subtração'){
        val = Number(arr[0]) - Number(arr[1])
    }
    if (op == 'multiplicação'){
        val = Number(arr[0]) * Number(arr[1])
    }
    if (op == 'divisão'){
        val = Number(arr[0]) / Number(arr[1])
    }
    if (op == 'potencia'){
        val = Number(arr[0]) ** Number(arr[1])
    }
    if (op == 'raiz'){
        if (arr[0] == 0){
            arr[0] = 2
            val = arr[1] ** (1/arr[0])
        }
        else{
            val = arr[1] ** (1/arr[0])
        }
    }

    if (op == 'log'){
        val = Math.log(arr[0]) / Math.log(arr[1]);
    }
    arr = ['', ''];
    op = '';
    v.innerHTML = `${val}`;
}