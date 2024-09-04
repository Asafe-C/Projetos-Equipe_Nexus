// Construção

class Calculadora {
    constructor(a ,b) {
        this.a = a;
        this.b = b;
    }

    // operações
    somar() {
        return this.a + this.b;
    }

    subtrair() {
        return this.a - this.b;
    }

    multiplicar() {
        return this.a * this.b;
    }

    dividir() {
        try {
            return this.a / this.b;
            
        } catch (error) {
            throw new Error("Erro: Divisão por zero não é permitida!")
        }
        
    }
}

// Log
const calc = new Calculadora(10,2);


console.log(`a soma de ${calc.a} e ${calc.b} é igual a: `, calc.somar());          
console.log(`a subtração de ${calc.a} e ${calc.b} é igual a: `, calc.subtrair());    
console.log(`a multiplicação de ${calc.a} e ${calc.b} é igual a: `, calc.multiplicar()); 
console.log(`a divisão de ${calc.a} e ${calc.b} é igual a: `, calc.dividir());      
