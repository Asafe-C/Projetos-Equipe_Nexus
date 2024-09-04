class Gato {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    get nome() {
        return this._nome;
    }

    get raca() {
        return this._raca;
    }

    get idade() {
        return this._idade;
    }

    set nome(newName) {
        if (newName.length > 0) {
            this._nome = newName;
        } else {
            console.log("Nome inválido!");
        }
    }

    set raca(newRaca) {
        if (newRaca.length > 0) {
            this._raca = newRaca;
        } else {
            console.log("Raça inválida!")
        }
    }

    set idade(newAge) {
        if (newAge >= 0) {
            this._idade = newAge;
        } else {
            console.log("Idade inválida!");
        }
    }

    miar() {
        console.log('Miau!');
    }

    toString() {
        return `Gato: ${this.nome} - Raça: ${this.raca} - Idade: ${this.idade} anos.`
    }
}

let cat = new Gato("Gato de Botas", "Scottish Fold", 25);
console.log(cat.toString());
console.log(cat.miar());