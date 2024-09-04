class Livro {
    constructor(titulo, autor, editora, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
    }

    get titulo() {
        return this._titulo;
    }

    get autor() {
        return this._autor;
    }

    get editora() {
        return this._editora;
    }

    get anoPublicacao() {
        return this._anoPublicacao;
    }

    set titulo(newTitulo) {
        this._titulo = newTitulo;
    }

    set autor(newAutor) {
        this._autor = newAutor;
    }

    set editora(newEditora) {
        this._editora = newEditora;
    }

    set anoPublicacao(newAnoP) {
        this._anoPublicacao = newAnoP;
    }

    toString() {
        return `Livro: ${this.titulo} - Autor: ${this.autor} - Editora: ${this.editora} - Ano de Publicação: ${this.anoPublicacao}`
    }
}

let livro = new Livro("Percy Jackson e os Olimpianos: O Ladrão de Raios", "Rick Riordan", "Intrínseca", 2005)
console.log(livro.toString())