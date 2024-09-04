class Endereco {
    constructor(rua, numero, complemento, bairro, cidade, estado, cep) {
      this.rua = rua;
      this.numero = numero;
      this.complemento = complemento;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.cep = cep;
    }
  
    getRua() {
      return this.rua;
    }
  
    getNumero() {
      return this.numero;
    }
  
    getComplemento() {
      return this.complemento;
    }
  
    getBairro() {
      return this.bairro;
    }
  
    getCidade() {
      return this.cidade;  
  
    }
  
    getEstado() {
      return this.estado;  
  
    }
  
    getCep() {
      return this.cep;
    }

    setRua(novaRua) {
      this.rua = novaRua;
    }
  
    setNumero(novoNumero) {
      this.numero = novoNumero;
    }
  
    setComplemento(novoComplemento) {
      this.complemento = novoComplemento;
    }
  
    setBairro(novoBairro) {
      this.bairro = novoBairro;
    }
  
    setCidade(novaCidade) {
      this.cidade = novaCidade;
    }
  
    setEstado(novoEstado) {
      this.estado = novoEstado;  
  
    }
  
    setCep(novoCep) {
      this.cep = novoCep;
    }
  }

  const meuIP = new Endereco("Bonita Vizinhança", 8, "Barril", "Tangamandápio", "Cidade do México", "México", "3141-592");
  console.log(meuIP)