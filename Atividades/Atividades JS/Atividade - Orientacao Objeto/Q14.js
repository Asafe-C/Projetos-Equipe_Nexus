class Aluno {
  constructor(nome, matricula, curso) {
    this.nome = nome;
    this.matricula = matricula;
    this.curso = curso;
  }

  getNome() {
    return this.nome;
  }

  getMatricula() {
    return this.matricula;
  }

  getCurso() {
    return this.curso;
  }

  setNome(novoNome) {
    this.nome = novoNome;
  }

  setMatricula(novaMatricula) {
    this.matricula = novaMatricula;
  }

  setCurso(novoCurso) {
    this.curso = novoCurso;
  }
}

const aluno1 = new Aluno("Shadow the Hedgehog", 12369, "Informática para Internet");
console.log(aluno1)