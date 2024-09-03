class Animal{
    #nome
    #tipo
    constructor(nome, tipo){
        this.#nome = nome;
        this.#tipo = tipo;
    }

    get nome(){
        return this.#nome
    }

    set nome(novoNome){
        if(typeof novoNome === 'string'){
            this.#nome = novoNome;
        }else{
            throw new Error("O valor deve ser uma string!")
        }
    }

    get tipo(){
        return this.#tipo
    }

    set tipo(novoTipo){
        if(typeof novoTipo === 'string'){
            this.#tipo = novoTipo;
        }else{
            throw new Error("O valor deve ser uma string!")
        }
    }

    emitirSom(){
        return("zzzzzzzzzz...")
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

try {
    const morcegozinho = new Morcego();
    morcegozinho.nome = "Bruce";
    console.log(`Nome: ${morcegozinho.nome};\nTipo: ${morcegozinho.tipo};\nSom: ${morcegozinho.emitirSom()}.`);
} catch (error) {
    console.error(error.message);
}
