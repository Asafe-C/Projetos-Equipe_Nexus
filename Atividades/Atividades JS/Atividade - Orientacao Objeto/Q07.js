class Produto{
    constructor(nome, preco, quant){
        this.nome = nome;
        this.preco = preco;
        this.quant = quant
    }

    calcularTotal(){
        return(`Produto: ${this.nome}, Preço Total: R$${this.preco * this.quant}`);
    }
}

const coca = new Produto("Coca-Cola", 7, 30);
console.log(coca.calcularTotal());