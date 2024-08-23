function SomaDeArray(soma){
    const valSoma = soma.reduce((ac, num) => ac + num, 0);
    return valSoma
}

console.log(SomaDeArray([10, 10, 10]));
console.log(SomaDeArray([15, 15, 15, 15]));