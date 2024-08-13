let conta = "111.111.111-11";
    let senha = "123456";

    function login() {
      let user = document.getElementById("identificacao").value;
      let pass = document.getElementById("senha").value;
      let mensagem = document.getElementById("erro");

      if (user === conta && pass === senha) {
        window.alert("Login realizado com sucesso.");
      } else {
        window.alert("CPF ou senha incorretos!")
      }
    }

/* CPF */
const cpfInput = document.getElementById('identificacao');

cpfInput.addEventListener("input", handleCpfInput);

function handleCpfInput(event) {
  const input = event.target;
  const cpfValue = input.value.replace(/\D+/g, ''); 
  const cpfFormatted = formatCpf(cpfValue); 
  input.value = cpfFormatted; 
}

function formatCpf(value) {
  if (value.length <= 3) {
    return value;
  } else if (value.length <= 6) {
    return `${value.substring(0, 3)}.${value.substring(3)}`;
  } else if (value.length <= 9) {
    return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6)}`;
  } else {
    return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
  }
}