import { validate } from "bycontract";

// Classe PlanoDeVoo
export class PlanoDeVoo {
    #id;
    #matriculaPiloto;
    #idAerovia;
    #data;
    #horario;
    #altitude;
    #slots;
    #cancelado;

    // Construtor da classe PlanoDeVoo
    constructor(id, matriculaPiloto, idAerovia, data, horario, altitude, slots, cancelado) {
        validate(arguments, ["string", "string", "string", "string", "string", "number", "array", "boolean"]);
        this.#id = id;
        this.#matriculaPiloto = matriculaPiloto;
        this.#idAerovia = idAerovia;
        this.#data = data;
        this.#horario = horario;
        this.#altitude = altitude;
        this.#slots = slots;
        this.#cancelado = cancelado;
    }

    // Getter para o ID do plano de voo
    get id() {
        return this.#id;
    }

    // Getter para a matrícula do piloto
    get matriculaPiloto() {
        return this.#matriculaPiloto;
    }

    // Getter para o ID da aerovia
    get idAerovia() {
        return this.#idAerovia;
    }

    // Getter para a data do plano de voo
    get data() {
        return this.#data;
    }

    // Getter para o horário do plano de voo
    get horario() {
        return this.#horario;
    }

    // Getter para a altitude do plano de voo
    get altitude() {
        return this.#altitude;
    }

    // Getter para os slots do plano de voo
    get slots() {
        return this.#slots;
    }

    // Getter para o status de cancelamento do plano de voo
    get cancelado() {
        return this.#cancelado;
    }
}

// Função para o Serviço de Planos de Voo
export function ServicoPlanos(planos) {
    // Retorna uma lista com IDs dos planos de voo
    return planos.map(plano => plano.id);
}
