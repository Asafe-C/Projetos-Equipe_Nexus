class Client{
    constructor(nome, cpf, dataNascimento, endereco, email, ocupacao, rendaAnual, nivelEscolaridade){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.ocupacao = ocupacao;
        this.rendaAnual = rendaAnual;
        this.nivelEscolaridade = nivelEscolaridade
    }

    relatorio(){
        return(`\nNome: ${this.nome}\nCPF: ${this.cpf}\nData de Nascimento: ${this.dataNascimento}\nEndereço: ${this.endereco}\nEmail: ${this.email}\nOcupação: ${this.ocupacao}\nRenda Anual: ${this.rendaAnual}\nNível de Escolaridade: ${this.nivelEscolaridade}\n`);
    }
}

const cliente1 = new Client("Kalledy","501.358.008-55","07/05/2003","Rua Fictícia","contato@email.com","Artista Musical","R$2000,00","Ensino Médio Completo");
console.log(cliente1.relatorio());