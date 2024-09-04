class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    get dia() {
        return this._dia;
    }

    set dia(newDay) {
        if (newDay < 1 || newDay > 31) {
            throw new Error("Dia inválido");
        }
        this._dia = newDay;
    }

    get mes() {
        return this._mes;
    }

    set mes(newMes) {
        if (newMes < 1 || newMes > 12) {
            throw new Error("Mês inválido");
        }
        this._mes = newMes;
    }

    get ano() {
        return this._ano;
    }

    set ano(newYear) {
        if (newYear < 1) {
            throw new Error("Ano inválido");
        }
        this._ano = newYear;
    }

    toString() {
        return `${this.dia.toString().padStart(2, '0')}/${this.mes.toString().padStart(2, '0')}/${this.ano}`;
    }
}

let data = new Data(12, 2, 2007);
console.log(data.toString());

class Hora {
    constructor(horas, minutos) {
        this.horas = horas;
        this.minutos = minutos;
    }

    get horas() {
        return this._horas;
    }

    set horas(horas) {
        if (horas < 0 || horas > 23) {
            throw new Error("Hora inválida");
        }

        this._horas = horas;
    }

    get minutos() {
        return this._minutos;
    }

    set minutos(minutos) {
        if (minutos < 0 || minutos > 59) {
            throw new Error("Minuto inválido");
        }

        this._minutos = minutos;
    }

    toString() {
        return `${this.horas.toString().padStart(2, '0')}:${this.minutos.toString().padStart(2, '0')}`;
    }
}

class DataHora {
    constructor(data, hora) {
        this.data = data;
        this.hora = hora;
    }

    toString() {
        return `${this.data.toString()} ${this.hora.toString()}`;
    }
}

let data1 = new Data(12, 2, 2007);
let hora = new Hora(15, 35);
let dataHora = new DataHora(data1, hora);
console.log(dataHora.toString());