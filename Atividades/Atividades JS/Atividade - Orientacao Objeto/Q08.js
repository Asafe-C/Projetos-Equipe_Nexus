class Client {
    #nome;
    #cpf;
    #dataNascimento;
    #endereco;
    #email;
    #ocupacao;
    #rendaAnual;
    #nivelEscolaridade;
  
    constructor(nome, cpf, dataNascimento, endereco, email, ocupacao, rendaAnual, nivelEscolaridade) {
      this.#nome = nome;
      this.#cpf = cpf;
      this.#dataNascimento = dataNascimento;
      this.#endereco = endereco;
      this.#email = email;
      this.#ocupacao = ocupacao;
      this.#rendaAnual = rendaAnual;
      this.#nivelEscolaridade = nivelEscolaridade;
    }
  
    get nome() {
      return this.#nome;
    }
  
    set nome(novoNome) {
      if (typeof novoNome === 'string') {
        this.#nome = novoNome;
      } else {
        throw new Error("O valor deve ser uma string!");
      }
    }
  
    get cpf() {
      return this.#cpf;
    }
  
    set cpf(novoCpf) {
      if (typeof novoCpf === 'string') {
        this.#cpf = novoCpf;
      } else {
        throw new Error("O valor deve ser uma string!");
      }
    }
  
    get dataNascimento() {
      return this.#dataNascimento;
    }
  
    set dataNascimento(novaDataNascimento) {
      if (typeof novaDataNascimento === 'string') {
        this.#dataNascimento = novaDataNascimento;
      } else {
        throw new Error("O valor deve ser uma string!");
      }
    }
  
    get endereco() {
      return this.#endereco;
    }
  
    set endereco(novoEndereco) {
      if (typeof novoEndereco === 'string') {
        this.#endereco = novoEndereco;
      } else {
        throw new Error("O valor deve ser uma string!");
      }
    }
  
    get email() {
      return this.#email;
    }
  
    set email(novoEmail) {
      if (typeof novoEmail === 'string') {
        this.#email = novoEmail;
      } else {
        throw new Error("O valor deve ser uma string!");
      }
    }
  
    get ocupacao() {
      return this.#ocupacao;
    }
  
    set ocupacao(novaOcupacao) {
      if (typeof novaOcupacao === 'string') {
        this.#ocupacao = novaOcupacao;
      } else {
        throw new Error("O valor deve ser uma string!");
      }
    }
  
    get rendaAnual() {
      return this.#rendaAnual;
    }
  
    set rendaAnual(novaRendaAnual) {
      if (typeof novaRendaAnual === 'number') {
        this.#rendaAnual = novaRendaAnual.toFixed(2);
      } else {
        throw new Error("O valor deve ser um number!");
      }
    }
  
    get nivelEscolaridade() {
      return this.#nivelEscolaridade;
    }
  
    set nivelEscolaridade(novoNivelEscolaridade) {
      if (typeof novoNivelEscolaridade === 'string') {
        this.#nivelEscolaridade = novoNivelEscolaridade;
      } else {
        throw new Error("O valor deve ser uma string!");
      }
    }

    relatorio() {
      return (`\nNome: ${this.#nome}\nCPF: ${this.#cpf}\nData de Nascimento: ${this.#dataNascimento}\nEndereço: ${this.#endereco}\nEmail: ${this.#email}\nOcupação: ${this.#ocupacao}\nRenda Anual: ${this.#rendaAnual}\nNível de Escolaridade: ${this.#nivelEscolaridade}\n`);
    }
  }
  
  try {
    const cliente1 = new Client();
    cliente1.nome = 'Asafe';
    cliente1.cpf = 'xxx.xxx.xxx-xx';
    cliente1.dataNascimento = '12/05/2007';
    cliente1.endereco = 'XXXXX-XXX';
    cliente1.email = 'asafe@email.com';
    cliente1.ocupacao = 'aluno';
    cliente1.rendaAnual = 20000;
    cliente1.nivelEscolaridade = 'Médio Incompleto';
    console.log(cliente1.relatorio());
  } catch (error) {
    console.error(error.message);
  }
  