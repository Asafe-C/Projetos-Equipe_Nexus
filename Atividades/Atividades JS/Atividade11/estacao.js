
function mes(){
    let month = window.prompt("Informe o Mês: ");
    
    let frase = document.getElementById("fraseMes");

  switch (month){
    case 'JANEIRO':
      frase.innerHTML = "Estamos no Verão"
    case 'FEVEREIRO':
      frase.innerText = "Estamos no Verão"
    case 'MARÇO':
      frase.innerText = 'Se for até dia 21, estamos no Verão, se for a partir do dia 21, estamos no Outono'
    case 'ABRIL':
      frase.innerText = "Estamos no Outono"
    case 'MAIO':
      frase.innerText = "Estamos no Outono"
    case 'JUNHO':
      frase.innerText = 'Se for até dia 21, estamos no Outono, se for a partir do dia 21, estamos no Inverno'
    case 'JULHO':
      frase.innerText = 'Estamos no Inverno'
    case 'AGOSTO':
      frase.innerText = 'Estamos no Inverno'
    case 'SETEMBRO':
      frase.innerText = 'Se for até dia 23, estamos no Inverno, se for a partir do dia 23, estamos na Primavera'
    case 'OUTUBRO':
      frase.innerText = 'Estamos na Primavera'
    case 'NOVEMBRO':
      frase.innerText = 'Estamos na Primavera'
    case 'DEZEMBRO':
      frase.innerText = 'Se for até dia 21, estamos no Primavera, se for a partir do dia 21, estamos na Verão'
  }
}