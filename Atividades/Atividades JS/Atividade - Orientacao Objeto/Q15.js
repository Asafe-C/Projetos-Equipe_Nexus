class Professor {
    constructor(nome, departamento, titulacao) {
      this.nome = nome;
      this.departamento = departamento;
      this.titulacao = titulacao;
    }
  
    getNome() {
      return this.nome;
    }
  
    getDepartamento() {
      return this.departamento;
    }
  
    getTitulacao() {
      return this.titulacao;
    }
  
    setNome(novoNome) {
      this.nome = novoNome;
    }
  
    setDepartamento(novoDepartamento) {
      this.departamento = novoDepartamento;
    }
  
    setTitulacao(novaTitulacao) {
      this.titulacao = novaTitulacao;
    }
  }

  const professor1 = new Professor("Kyu Hayato", "Ciências da Computação", "Bacharel");
  console.log(professor1)