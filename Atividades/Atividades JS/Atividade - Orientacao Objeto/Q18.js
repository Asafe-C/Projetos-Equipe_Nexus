class Empresa {
    constructor(nome, cnpj) {
      this.nome = nome;
      this.cnpj = cnpj;
      this.endereco = "Bonita Vizinhança, 8, Barril, Tangamandápio, Cidade do México, México, 3141-592";
      this.dataDeCriacao = "13/5/2007";
    }
  
    getNome() {
      return this.nome;
    }
  
    getCnpj() {
      return this.cnpj;
    }

    setNome(novoNome) {
      this.nome = novoNome;
    }
  
    setCnpj(novoCnpj) {
      this.cnpj = novoCnpj;
    }
  
    setEndereco(novoEndereco) {
      this.endereco = novoEndereco;
    }
  }

  const empresa1 = new Empresa(
    "Nexus",
    "12.345.678/0001-99",
  );

  console.log(empresa1)