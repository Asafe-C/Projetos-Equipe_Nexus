// Construção

class Pessoa {
    #nome;
    #idade;
    #altura;

    constructor(nome, idade, altura) {
        this.#nome = nome;
        this.#idade = idade;
        this.#altura = altura;
    }

    // Get e Set
    get Nome() {
        return this.#nome;
    }

    set Nome(Novonome) {
        this.#nome = Novonome;
    }

    get Idade() {
        return this.#idade;
    }

    set Idade(NovaIdade) {
        this.#idade = NovaIdade;
    }

    get Altura() {
        return this.#altura;
    }

    set Altura(NovaAltura) {
       this.#altura = NovaAltura;

    }

    // Mensagem ToString

    Mensagem() {
        return `Olá, meu nome é ${this.#nome} e tenho ${this.#idade} anos e tenho ${this.#altura} de altura`
    }
}

const pessoa1 = new Pessoa("Antonio", 17, 1.80);
console.log(pessoa1.Mensagem());
console.log("A altura da pessoa1 é:",pessoa1.Altura);
pessoa1.Altura = 1.9
console.log("A altura inserida foi: ",pessoa1.Altura);
