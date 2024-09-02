<<<<<<< HEAD
class animal{
    #nome
    #tipo
    constructor(nome, tipo){
        this.#nome = nome,
        this.#tipo = tipo
    }

    get nome(){
        return this.#nome
    }

    set nome(novoNome){
        if(typeof novoNome === 'string'){
            return this.#nome = novoNome;
        }else{
            throw new Error("O valor deve ser uma string!")
        }
    }

    get tipo(){
        return this.#tipo
    }

    set tipo(novoTipo){
        if(typeof novoTipo === 'string'){
            return this.#tipo = novoTipo;
        }else{
            throw new Error("O valor deve ser uma string!")
        }
    }

    emitirSom(){
        return("zzzzzzzzzz...")
=======
class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo
    }

    emitirSom(){
        return("zzzzzzzzzzzzzzzzz")
>>>>>>> fca511d66248944fbdbffe10b64581d3941cd28d
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

<<<<<<< HEAD
try {
    const morcegozinho = new morcego();
    morcegozinho.nome = "Bruce";
    console.log(`Nome: ${morcegozinho.nome};\nTipo: ${morcegozinho.tipo};\nSom: ${morcegozinho.emitirSom()}.`);
} catch (error) {
    console.error(error.message);
}
=======
const morcegozinho = new Morcego("Bruce");
console.log("nome: " + morcegozinho.nome + ", tipo: " + morcegozinho.tipo + ", som que faz: " + morcegozinho.emitirSom());
>>>>>>> fca511d66248944fbdbffe10b64581d3941cd28d
