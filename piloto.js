import { validate } from "bycontract";

// Classe Piloto
export class Piloto {
    #matricula;
    #nome;
    #habilitacaoAtiva;

    // Construtor da classe Piloto
    constructor(matricula, nome, habilitacaoAtiva) {
        validate(arguments, ["string", "string", "boolean"]);
        this.#matricula = matricula;
        this.#nome = nome;
        this.#habilitacaoAtiva = habilitacaoAtiva;
    }

    // Getter para a matrícula do piloto
    get matricula() {
        return this.#matricula;
    }

    // Getter para o nome do piloto
    get nome() {
        return this.#nome;
    }

    // Getter para a habilitação do piloto
    get habilitacaoAtiva() {
        if (!this.#habilitacaoAtiva) {
            throw new Error('Habilitação inativa. Voo cancelado.');
        }
        return this.#habilitacaoAtiva;
    }
}
