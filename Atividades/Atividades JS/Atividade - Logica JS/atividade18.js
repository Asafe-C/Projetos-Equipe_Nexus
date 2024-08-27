// 18º Questão

function calcularAreaTriangulo(base, altura) {
    const area = (base * altura)/2;
    return area.toFixed(2);
}

const baseTriangulo = 10;
const alturaTriangulo = 5;
const areaCalculada = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
console.log("A Área do Triângulo: ", areaCalculada);