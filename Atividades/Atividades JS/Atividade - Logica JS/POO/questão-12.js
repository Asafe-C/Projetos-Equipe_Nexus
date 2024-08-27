class Livro {
    constructor(titulo, autor, editora, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
    }
}

let livro = new Livro("Percy Jackson e os Olimpianos: O Ladrão de Raios", "Rick Riordan", "Intrínseca", 2005)
console.log(livro)