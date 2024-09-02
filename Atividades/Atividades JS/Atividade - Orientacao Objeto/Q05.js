class Data{
    #dia
    #mes
    #ano
    constructor(dia, mes, ano){
        this.#dia = dia;
        this.#mes = mes;
        this.#ano = ano
    }

    get dia(){
        return this.#dia
    }

    set dia(novoDia){
        if(typeof novoDia === 'number' && novoDia >= 1 && novoDia <= 31){
            this.#dia = novoDia
        }else{
            throw new Error("Digite um dia válido!")
        }
    }

    get mes(){
        return this.#mes
    }

    set mes(novoMes){
        if(typeof novoMes === 'number' && novoMes >= 1 && novoMes <= 12){
            this.#mes = novoMes
        }else{
            throw new Error("Digite um mês válido!")
        }
    }

    get ano(){
        return this.#ano
    }

    set ano(novoAno){
        if(typeof novoAno === 'number'){
            this.#ano = novoAno
        }else{
            throw new Error("Digite um ano válido!")
        }
    }

    toString(){
        return(this.dia + "/" + this.mes + "/" + this.ano);
    }
}

try {
    const datamassa = new Data();
    datamassa.dia = 12
    datamassa.mes = 5
    datamassa.ano = 2007
    console.log(datamassa.toString());
} catch (error) {
    console.error(error.message)
}