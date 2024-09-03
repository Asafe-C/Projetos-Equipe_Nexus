class Disciplina {
    constructor(nome, codigo, cargaHoraria) {
      this.nome = nome;
      this.codigo = codigo;
      this.cargaHoraria = cargaHoraria;
    }
  
    getNome() {
      return this.nome;
    }
  
    getCodigo() {
      return this.codigo;
    }
  
    getCargaHoraria() {
      return this.cargaHoraria;
    }
  
    setNome(novoNome) {
      this.nome = novoNome;
    }
  
    setCodigo(novoCodigo) {
      this.codigo = novoCodigo;
    }
  
    setCargaHoraria(novaCargaHoraria) {
      this.cargaHoraria = novaCargaHoraria;
    }
  }

  const disciplina1 = new Disciplina("Informática", "info3b", 360);
  console.log(disciplina1)