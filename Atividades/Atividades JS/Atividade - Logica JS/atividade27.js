function melhorMedia(estudantes) {
    const melhorEstudante = { nome: '', media: 0 };

    for (const estudante in estudantes) {
        const notas = estudantes[estudante];
        const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

        if (media > melhorEstudante.media) {
            melhorEstudante.nome = estudante;
            melhorEstudante.media = media;
        }
    }

    return melhorEstudante;
}

console.log(melhorMedia({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}));