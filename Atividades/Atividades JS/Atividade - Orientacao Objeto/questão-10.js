class Gato {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    miar() {
        console.log('Miau!');
    }
}

let cat = new Gato("Gato de Botas", "Scottish Fold", 25);
console.log(cat);
console.log(cat.miar());