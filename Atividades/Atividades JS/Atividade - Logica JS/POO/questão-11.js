class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    perimetro() {
        let p = (this.ladoA + this.ladoB + this.ladoC);
        return p;
    }

    area() {
        let s = this.perimetro() / 2;
        let a = Math.sqrt(s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC));
        return a;
    }
}

let lado = new Triangulo(3, 4, 5);
console.log(lado.perimetro());
console.log(lado.area());