import { validate } from "bycontract";

// Classe Aeronave
export class Aeronave {
    #prefixo;
    #velocidadeCruzeiro;
    #autonomia;

    // Construtor da classe Aeronave
    constructor(prefixo, velocidadeCruzeiro, autonomia) {
        validate(arguments, ["string", "number", "number"]);
        this.#prefixo = prefixo;
        this.#velocidadeCruzeiro = velocidadeCruzeiro;
        this.#autonomia = autonomia;
    }

    // Getter para o prefixo da aeronave
    get prefixo() {
        return this.#prefixo;
    }

    // Getter para a velocidade de cruzeiro da aeronave
    get velocidadeCruzeiro() {
        return this.#velocidadeCruzeiro;
    }

    // Getter para a autonomia da aeronave
    get autonomia() {
        return this.#autonomia;
    }
}

// Classe Aeronave Particular
export class AeronaveParticular extends Aeronave {
    #respManutencao;

    // Construtor da classe AeronaveParticular
    constructor(prefixo, velocidadeCruzeiro, autonomia, respManutencao) {
        validate(arguments, ["string", "number", "number", "string"]);
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.#respManutencao = respManutencao;
    }

    // Getter para o responsável pela manutenção
    get respManutencao() {
        return this.#respManutencao;
    }

    // Método que retorna o tipo da aeronave
    get tipo() {
        return "Aeronave Particular Pequeno Porte";
    }
}

// Classe Aeronave Comercial
export class AeronaveComercial extends Aeronave {
    #nomeCIA;

    // Construtor da classe AeronaveComercial
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA) {
        validate(arguments, ["string", "number", "number", "string"]);
        super(prefixo, velocidadeCruzeiro, autonomia);
        this.#nomeCIA = nomeCIA;
    }

    // Getter para o nome da companhia aérea
    get nomeCIA() {
        return this.#nomeCIA;
    }
}

// Classe Aeronave Passageiros
export class AeronavePassageiros extends AeronaveComercial {
    #maxPassageiros;

    // Construtor da classe AeronavePassageiros
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, maxPassageiros) {
        validate(arguments, ["string", "number", "number", "string", "number"]);
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        this.#maxPassageiros = maxPassageiros;
    }

    // Getter para o máximo de passageiros
    get maxPassageiros() {
        return this.#maxPassageiros;
    }

    // Método que retorna o tipo da aeronave
    get tipo() {
        return "Aeronave de Passageiros";
    }
}

// Classe Aeronave Carga
export class AeronaveCarga extends AeronaveComercial {
    #pesoMax;

    // Construtor da classe AeronaveCarga
    constructor(prefixo, velocidadeCruzeiro, autonomia, nomeCIA, pesoMax) {
        validate(arguments, ["string", "number", "number", "string", "number"]);
        super(prefixo, velocidadeCruzeiro, autonomia, nomeCIA);
        this.#pesoMax = pesoMax;
    }

    // Getter para o peso máximo
    get pesoMax() {
        return this.#pesoMax;
    }

    // Método que retorna o tipo da aeronave
    get tipo() {
        return "Aeronave de Carga";
    }
}
