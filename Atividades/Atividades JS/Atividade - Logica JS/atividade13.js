function filtroPares(numeros){
    const numFiltrados = numeros.filter((num, indice) => indice%2 === 0 && num%2 === 0)
    return numFiltrados
}

console.log(filtroPares([1, 2, 3, 4]));

console.log(filtroPares([10, 70, 22, 43]));