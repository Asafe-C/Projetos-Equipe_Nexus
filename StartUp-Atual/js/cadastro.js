/* JavaScript focando em colocar mascaras no Input dos Cadastros */


/* Telefone */
const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
};

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

/* CPF */
const cpfInput = document.getElementById('cpf');

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

/* CEP */

const cepInput = document.getElementById('cep');

cepInput.addEventListener('input', handleCepInput);

function handleCepInput(event) {
  const input = event.target;
  const cepValue = input.value.replace(/\D+/g, ''); 
  const cepFormatted = formatCep(cepValue); 
  input.value = cepFormatted; 
}

function formatCep(value) {
  if (value.length <= 5) {
    return value;
  } else {
    return `${value.substring(0, 5)}-${value.substring(5)}`;
  }
}
