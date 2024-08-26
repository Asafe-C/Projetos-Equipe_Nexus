class Data{
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
    }

    toString(){
        return(this.dia + "/" + this.mes + "/" + this.ano);
    }
}

const datamassa = new Data(12,5,2007);
console.log(datamassa.toString());