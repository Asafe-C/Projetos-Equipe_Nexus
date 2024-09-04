class Personagem {
    #nome;
    #pontosDeVida;
    #forca;
    #pontosDeDefesa;
    #nivel;
    #experiencia;
    #experienciaNecessaria;

    constructor(nome, pontosDeVida, forca, pontosDeDefesa, nivel = 1, experiencia = 0) {
        this.#nome = nome;
        this.#pontosDeVida = pontosDeVida;
        this.#forca = forca;
        this.#pontosDeDefesa = pontosDeDefesa;
        this.#nivel = nivel;
        this.#experiencia = experiencia;
        this.#experienciaNecessaria = 100;
    }

    get nome() {
        return this.#nome;
    }

    get pontosDeVida() {
        return this.#pontosDeVida;
    }

    get forca() {
        return this.#forca;
    }

    get pontosDeDefesa() {
        return this.#pontosDeDefesa;
    }

    get nivel() {
        return this.#nivel;
    }

    get experiencia() {
        return this.#experiencia;
    }

    set pontosDeVida(newHP) {
        this.#pontosDeVida = newHP;
    }

    async ganharExperiencia(exp) {
        this.#experiencia += exp;
        while (this.#experiencia >= this.#experienciaNecessaria) {
            this.#experiencia -= this.#experienciaNecessaria;
            await this.subirDeNivel();
        }
    }

    async subirDeNivel() {
        let forcaAnterior = this.#forca;
        let vidaAnterior = this.#pontosDeVida;
        let defesaAnterior = this.#pontosDeDefesa;

        this.#nivel += 1;
        this.#forca += 5;
        this.#pontosDeVida += 20;
        this.#pontosDeDefesa += 3;
        this.#experienciaNecessaria += 100;

        console.log(`${this.#nome} subiu para o nível ${this.#nivel}!`);
        console.log(`Força: de ${forcaAnterior} para ${this.#forca}`);
        console.log(`Vida: de ${vidaAnterior} para ${this.#pontosDeVida}`);
        console.log(`Defesa: de ${defesaAnterior} para ${this.#pontosDeDefesa}`);

        await this.delay(4000);
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

class Guerreiro extends Personagem {
    constructor(nome, pontosDeVida, forca, pontosDeDefesa, itens = []) {
        super(nome, pontosDeVida, forca, pontosDeDefesa);
        this.itens = itens;
    }

    async atacar(outroPersonagem) {
        if (this.deveUsarPocao()) {
            this.usarPocao();
            return;
        } else {
            let usarEspada = Math.random() < 0.5;
            let dano = usarEspada ? this.forca + 10 : this.forca;
            dano += Math.floor(Math.random() * 10);
            console.log(`${this.nome} atacou: ${dano} de dano`);
            await outroPersonagem.defender(dano);
            await this.ganharExperiencia(dano);
        }
    }

    async defender(dano) {
        let danoRecebido = dano - this.pontosDeDefesa;
        danoRecebido = Math.max(danoRecebido, 0);
        this.pontosDeVida -= danoRecebido;
        console.log(`${this.nome} defendeu: ${danoRecebido} de dano recebido. Pontos de Vida: ${this.pontosDeVida}`);
        await this.ganharExperiencia(danoRecebido);
    }

    deveUsarPocao() {
        return this.pontosDeVida < 0.5 * 150 && this.itens.some(item => item.nome === "Poção de Vida");
    }

    usarPocao() {
        let pocaoIndex = this.itens.findIndex(item => item.nome === "Poção de Vida");
        if (pocaoIndex !== -1) {
            this.itens[pocaoIndex].usar(this);
            this.itens.splice(pocaoIndex, 1);
        } else {
            console.log(`${this.nome} não tem mais poções!`);
        }
    }
}

class Mago extends Personagem {
    constructor(nome, pontosDeVida, forca, pontosDeDefesa, itens = []) {
        super(nome, pontosDeVida, forca, pontosDeDefesa);
        this.itens = itens;
    }

    async atacar(outroPersonagem) {
        if (this.deveUsarPocao()) {
            this.usarPocao();
            return;
        } else {
            let usarFeitico = Math.random() < 0.3;
            if (usarFeitico) {
                await this.lancarFeitico(outroPersonagem);
            } else {
                let dano = this.forca * 1.5 + Math.floor(Math.random() * 10);
                console.log(`${this.nome} atacou: ${dano.toFixed(2)} de dano`);
                await outroPersonagem.defender(dano);
                await this.ganharExperiencia(dano);
            }
        }
    }

    async defender(dano) {
        let danoRecebido = dano - this.pontosDeDefesa;
        if (this.temCapa()) {
            danoRecebido -= 5;
        }

        danoRecebido = Math.max(danoRecebido, 0);
        this.pontosDeVida -= danoRecebido;
        console.log(`${this.nome} defendeu: ${danoRecebido} de dano recebido. Pontos de Vida: ${this.pontosDeVida}`);
        await this.ganharExperiencia(danoRecebido);
    }

    async lancarFeitico(outroPersonagem) {
        console.log(`${this.nome} está lançando um feitiço...`);
        let dano = this.forca * 2 + Math.floor(Math.random() * 10);
        console.log(`Feitiço lançado! ${dano.toFixed(2)} de dano`);
        await outroPersonagem.defender(dano);
        await this.ganharExperiencia(dano);
    }

    deveUsarPocao() {
        return this.pontosDeVida < 0.5 * 120 && this.itens.some(item => item.nome === "Poção de Vida");
    }

    usarPocao() {
        let pocaoIndex = this.itens.findIndex(item => item.nome === "Poção de Vida");
        if (pocaoIndex !== -1) {
            this.itens[pocaoIndex].usar(this);
            this.itens.splice(pocaoIndex, 1);
        } else {
            console.log(`${this.nome} não tem mais poções!`);
        }
    }

    temCapa() {
        return this.itens.some(item => item.nome === "Capa Mágica");
    }
}

class PocaoDeVida {
    constructor() {
        this.nome = "Poção de Vida";
    }

    usar(personagem) {
        personagem.pontosDeVida += 40;
        console.log(`${personagem.nome} usou uma Poção de Vida e recuperou 40 pontos de vida!`);
    }
}

class CapaMagica {
    constructor() {
        this.nome = "Capa Mágica";
    }
}

class Batalha {
    constructor(guerreiro, mago) {
        this.guerreiro = guerreiro;
        this.mago = mago;
        this.turnoAtual = Math.random() < 0.5 ? guerreiro : mago;
    }

    async iniciar() {
        console.log("A batalha começou!");
        await this.delay(4000);

        console.log(`${this.guerreiro.nome}: Prepare-se para a Batalha, ${this.mago.nome}!`);
        console.log(`${this.mago.nome}: Não subestime meus poderes, ${this.guerreiro.nome}!`);
        await this.delay(4000);

        let vitoriasGuerreiro = 0;
        let vitoriasMago = 0;

        while (vitoriasGuerreiro < 2 && vitoriasMago < 2) {
            await this.executarTurno();

            if (this.guerreiro.pontosDeVida <= 0) {
                console.log(`${this.guerreiro.nome} foi derrotado!`);
                vitoriasMago++;
                await this.mago.ganharExperiencia(50);
                this.reiniciarPontosDeVida();
            } else if (this.mago.pontosDeVida <= 0) {
                console.log(`${this.mago.nome} foi derrotado!`);
                vitoriasGuerreiro++;
                await this.guerreiro.ganharExperiencia(50);
                this.reiniciarPontosDeVida();
            }

            if (vitoriasGuerreiro < 2 && vitoriasMago < 2) {
                console.log("Próxima rodada...");
                await this.delay(4000);
            }
        }

        this.declararVencedor(vitoriasGuerreiro, vitoriasMago);
    }

    async executarTurno() {
        if (this.turnoAtual === this.guerreiro) {
            await this.guerreiro.atacar(this.mago);
            this.turnoAtual = this.mago;
        } else {
            await this.mago.atacar(this.guerreiro);
            this.turnoAtual = this.guerreiro;
        }

        await this.delay(4000);
    }

    reiniciarPontosDeVida() {
        this.guerreiro.pontosDeVida = 150 + (this.guerreiro.nivel - 1) * 20;
        this.mago.pontosDeVida = 120 + (this.mago.nivel - 1) * 20;
    }

    declararVencedor(vitoriasGuerreiro, vitoriasMago) {
        if (vitoriasGuerreiro > vitoriasMago) {
            console.log(`${this.guerreiro.nome} venceu a batalha!`);
        } else {
            console.log(`${this.mago.nome} venceu a batalha!`);
        }
    }

    async delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

const guerreiro = new Guerreiro("Arthur", 150, 30, 10, [new PocaoDeVida(), new PocaoDeVida(), new PocaoDeVida()]);
const mago = new Mago("Merlin", 120, 25, 8, [new PocaoDeVida(), new PocaoDeVida(), new PocaoDeVida(), new CapaMagica()]);

const batalha = new Batalha(guerreiro, mago);
batalha.iniciar();