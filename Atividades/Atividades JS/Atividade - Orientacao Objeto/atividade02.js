// Construção

class ContaCorrente {
  #saldo;
  #numeroConta;

  constructor(numeroConta, saldoInicial) {
    this.#numeroConta = numeroConta;
    this.#saldo = saldoInicial;
  }

  // Get e Set

  get Saldo() {
    return this.#saldo;
  }

  set Saldo(novoSaldo) {
    this.#saldo = novoSaldo;
  }

  // Depositar e Sacar 

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  sacar(valor) {
    if (valor > 0) {
      if (valor <= this.#saldo) {
        this.#saldo -= valor;
      } else {
        console.log("Saldo insuficiente.");
      }
    } else {
      console.log("O valor do saque deve ser positivo.");
    }
  }

  // Mensagem ToString

  mensagem() {
    return `Conta: ${this.#numeroConta}\n Saldo: R$ ${this.#saldo.toFixed(2)}`;
  }
}

// Log

const conta = new ContaCorrente("69", 1000);

console.log(conta.mensagem()); // Conta: 69 Saldo: R$ 1000.00
conta.depositar(500);
console.log(conta.mensagem()); // Conta: 69 Saldo: R$ 1500.00
conta.sacar(200);
console.log(conta.mensagem()); // Conta: 69 Saldo: R$ 1300.00
console.log("Get saldo: ",conta.Saldo);
conta.Saldo = 100;
console.log("Set saldo: ",conta.Saldo);
