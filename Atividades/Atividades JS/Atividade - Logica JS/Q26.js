function segundoMaior(numeros) {
    let maior = numeros[1];
    let segundoMaior = 0;

    numeros.forEach(num => {
        if (num > maior) {
            segundoMaior = maior;
            maior = num;
        }  
        else 
            if (num > segundoMaior && num < maior) {
                segundoMaior = num;
            }
    });
    
    return segundoMaior;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));