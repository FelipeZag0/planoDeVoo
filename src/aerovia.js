import { validate } from "bycontract";

// Classe Aerovia
export class Aerovia {
    #id;
    #origem;
    #destino;
    #tamanho;

    // Construtor da classe Aerovia
    constructor(id, origem, destino, tamanho) {
        validate(arguments, ["string", "string", "string", "number"]);
        this.#id = id;
        this.#origem = origem;
        this.#destino = destino;
        this.#tamanho = tamanho;
    }

    // Getter para o ID da aerovia
    get id() {
        return this.#id;
    }

    // Getter para a origem da aerovia
    get origem() {
        return this.#origem;
    }

    // Getter para o destino da aerovia
    get destino() {
        return this.#destino;
    }

    // Getter para o tamanho da aerovia
    get tamanho() {
        return this.#tamanho;
    }
}

// Função para o Serviço de Aerovias
export function ServicoAerovias(aerovias) {
    // Retorna uma lista de objetos com origem e destino das aerovias
    return aerovias.map(aerovia => ({
        origem: aerovia.origem,
        destino: aerovia.destino
    }));
}
