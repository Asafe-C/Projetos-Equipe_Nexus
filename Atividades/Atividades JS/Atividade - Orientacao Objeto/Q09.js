class Cachorro{
    #nome
    #raca
    #idade
    constructor(nome, raca, idade){
        this.#nome = nome;
        this.#raca = raca;
        this.#idade = idade;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        if(typeof novoNome === 'string'){
            this.#nome = novoNome;
        }else{
            throw new Error("Coloque um valor em string!");
        }
    }

    get raca() {
        return this.#raca;
      }
    
      set raca(novaRaca) {
        if (typeof novaRaca === 'string') {
          this.#raca = novaRaca;
        } else {
          throw new Error("Coloque um valor em string!");
        }
      }

      get idade() {
        return this.#idade;
      }
    
      set idade(novaIdade) {
        if (typeof novaIdade === 'number' && novaIdade >= 0) {
          this.#idade = novaIdade;
        } else {
          throw new Error("Coloque um valor em number!");
        }
      }

    latir(){
        return(`${this.nome}, da raça ${this.raca}, com ${this.idade} anos latiu dizendo: "Au au!".`);
    }
}

try {
    const cachorro1 = new Cachorro();
    cachorro1.nome = 'Jujuba';
    cachorro1.raca = 'POOdle';
    cachorro1.idade = 7;
    console.log(cachorro1.latir());
  } catch (error) {
    console.error(error.message);
  }