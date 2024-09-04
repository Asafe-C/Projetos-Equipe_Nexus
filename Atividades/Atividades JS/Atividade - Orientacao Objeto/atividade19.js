// Classe base Veiculo
class Veiculo {
    #placa;
    #modelo;
    #capacidade;

    constructor(placa, modelo, capacidade) {
        this.#placa = placa;
        this.#modelo = modelo;
        this.#capacidade = capacidade;
        this.passageiros = 0; // Inicia com zero passageiros
    }

    // Métodos get e set para placa
    get Placa() {
        return this.#placa;
    }

    set Placa(Placa) {
        this.#placa = Placa;
    }

    // Métodos get e set para modelo
    get Modelo() {
        return this.#modelo;
    }

    set Modelo(modelo) {
        this.#modelo = modelo;
    }

    // Métodos get e set para capacidade
    get Capacidade() {
        return this.#capacidade;
    }

    set Capacidade(Capacidade) {
        this.capacidade = Capacidade;
    }

    // Método para verificar a lotação
    verificarLotacao() {
        return this.passageiros >= this.capacidade;
    }

    // Método para adicionar passageiros
    adicionarPassageiros(numero) {
        if (this.passageiros + numero > this.capacidade) {
            console.log("Capacidade ultrapassada! Não é possível adicionar mais passageiros.");
        } else {
            this.passageiros += numero;
            console.log(`${numero} passageiros adicionados. Total: ${this.passageiros}`);
        }
    }
}

// Classe Onibus herda de Veiculo
class Onibus extends Veiculo {
    #linha;
    constructor(placa, modelo, capacidade, linha) {
        super(placa, modelo, capacidade);
        this.#linha = linha;
    }

    // Métodos get e set para linha
    get Linha() {
        return this.#linha;
    }

    set Linha(Linha) {
        this.#linha = Linha;
    }
}

// Classe Metro herda de Veiculo
class Metro extends Veiculo {
    #numeroDeVagoes;

    constructor(placa, modelo, capacidade, numeroDeVagoes) {
        super(placa, modelo, capacidade);
        this.#numeroDeVagoes = numeroDeVagoes;
    }

    // Métodos get e set para numeroDeVagoes
    get NumeroDeVagoes() {
        return this.#numeroDeVagoes;
    }

    set NumeroDeVagoes(numeroDeVagoes) {
        this.#numeroDeVagoes = numeroDeVagoes;
    }
}

// Classe Bilhete
class Bilhete {
    #codigo;
    #saldo;
    constructor(codigo, saldo) {
        this.#codigo = codigo;
        this.#saldo = saldo;
    }

    // Métodos get e set para codigo
    get Codigo() {
        return this.#codigo;
    }

    set Codigo(codigo) {
        this.#codigo = codigo;
    }

    // Métodos get e set para saldo
    get Saldo() {
        return this.#saldo;
    }

    set Saldo(saldo) {
        this.#saldo = saldo;
    }

    // Método para recarregar saldo
    recarregar(valor) {
        this.#saldo += valor;
        console.log(`Saldo recarregado. Novo saldo: R$${this.#saldo.toFixed(2)}`);
    }

    // Método para verificar saldo suficiente
    verificarSaldo(valor) {
        return this.#saldo >= valor;
    }
}

// Exemplo de uso
let onibus = new Onibus("ABC-1234", "Mercedes", 50, "Linha 1");
let metro = new Metro("DEF-5678", "CBTU", 200, 8);
let bilhete = new Bilhete("001", 20.00);

// Adicionando passageiros
onibus.adicionarPassageiros(30);
onibus.adicionarPassageiros(25); // Deve mostrar mensagem de capacidade ultrapassada

// Recarregando saldo do bilhete
bilhete.recarregar(15.00);
