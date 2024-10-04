class hero {
    constructor(name, idade, tipo, ataque) {
        this.name = name
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    escrever() {

        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)


    }
}
let atacou = new hero("Gabriel", "17", "guerreiro", "espada")
atacou.escrever()