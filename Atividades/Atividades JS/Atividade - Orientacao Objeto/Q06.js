class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo
    }

    emitirSom(){
        return("zzzzzzzzzzz")
    }
}

class Morcego extends Animal{
    constructor(nome){
        super(nome, "Morcego");
    }

    emitirSom() {
        return "Nome: " + morcegozinho.nome + ", Tipo: " + morcegozinho.tipo + ", Som que faz: ti ti ti ti";
    }
}

const morcegozinho = new Morcego("Bruce");
console.log(morcegozinho.emitirSom());