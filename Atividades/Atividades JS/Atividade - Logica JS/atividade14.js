function anoBissexto(ano){
    return (ano%4 === 0 && ano%100 !== 0) || (ano%400 === 0)
}

console.log(anoBissexto(2020));

console.log(anoBissexto(2100));