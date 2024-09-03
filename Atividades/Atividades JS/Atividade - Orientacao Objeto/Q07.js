class Produto{
    #nome
    #preco
    #quant
    constructor(nome, preco, quant){
        this.#nome = nome;
        this.#preco = preco;
        this.#quant = quant;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        if(typeof novoNome === 'string'){
            this.#nome = novoNome;
        }else{
            throw new Error("O valor deve ser uma string!");
        }
    }

    get preco(){
        return this.#preco;
    }

    set preco(novoPreco){
        if(typeof novoPreco === 'number'){
            this.#preco = novoPreco;
        }else{
            throw new Error("O valor deve ser um number!");
        }
    }

    get quant(){
        return this.#quant;
    }

    set quant(novoQuant){
        if(typeof novoQuant === 'number'){
            this.#quant = novoQuant;
        }else{
            throw new Error("O valor deve ser um number!");
        }
    }

    calcularTotal(){
        return(`Produto: ${this.#nome}, Preço Total: R$${this.#preco * this.#quant}`);
    }
}

try {
    const refri = new Produto();
    refri.nome = 'Coca-Cola';
    refri.preco = 7;
    refri.quant = 30;
    console.log(refri.calcularTotal()); 
} catch (error) {
    console.error(error.message);
}