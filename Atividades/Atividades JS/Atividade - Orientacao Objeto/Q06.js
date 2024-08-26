class animal{
    constructor(nome, tipo){
        this.nome = nome,
        this.tipo = tipo
    }

    emitirSom(){
    }
}

class morcego extends animal{
    constructor(nome){
        super(nome, "Morcego");
    }

    emitirSom() {
        return "ti ti ti ti ti";
    }
}

const morcegozinho = new morcego("Bruce");
console.log("nome: " + morcegozinho.nome + ", tipo: " + morcegozinho.tipo + ", som que faz: " + morcegozinho.emitirSom());