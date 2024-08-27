class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo
    }

    emitirSom(){
        return("zzzzzzzzzzzzzzzzz")
    }
}

class Morcego extends Animal{
    constructor(nome){
        super(nome, "Morcego");
    }

    emitirSom() {
        return "ti ti ti ti ti";
    }
}

const morcegozinho = new Morcego("Bruce");
console.log("nome: " + morcegozinho.nome + ", tipo: " + morcegozinho.tipo + ", som que faz: " + morcegozinho.emitirSom());