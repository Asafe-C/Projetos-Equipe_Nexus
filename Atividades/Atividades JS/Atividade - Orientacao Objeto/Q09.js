class Cachorro{
    constructor(nome, raca, idade){
        this.nome = nome,
        this.raca = raca,
        this.idade = idade
    }

    latir(){
        return(`${this.nome}, da raça ${this.raca}, com ${this.idade} anos latiu dizendo: "Au au!".`);
    }
}

const dog = new Cachorro ("Jujuba","poodle",7);
console.log(dog.latir());