function filtroDigitos(sequencia, dig){
        return sequencia.filter(num => num.toString().length === dig);
}

console.log(filtroDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtroDigitos([5, 9, 1, 125, 11], 1)); 