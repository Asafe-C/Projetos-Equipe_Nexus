// Construção

class Retangulo {
    #base;
    #altura;

    constructor(base, altura) {
        this.#base = base;
        this.#altura = altura;
    }

    // Calculos

    calcularArea() {
        return this.#base * this.#altura;
    }

    calcularPerimetro() {
        return 2 * (this.#base + this.#altura);
    }


    // Get 

    get Altura() {
        return this.#altura;
    }

    get Base() {
        return this.#base;
    }

    // Set

    set Altura(NovaAltura) {
    this.#altura = NovaAltura;
    }

    set Base(NovaBase) {
     this.#base = NovaBase;
    }
}




// Log

const retangulo = new Retangulo(5, 3);  

console.log("Área do retângulo:", retangulo.calcularArea());          
console.log("Perímetro do retângulo:", retangulo.calcularPerimetro()); 
console.log(retangulo.Altura); // get altura
retangulo.Altura = 4; // set altura
console.log("Nova Área do retângulo:", retangulo.calcularArea());     
