import { expect } from 'chai';
import { Piloto } from '../src/piloto.js';

describe('Piloto', () => {
    // Testa a criação de um Piloto com valores corretos
    it('deve criar um Piloto com valores corretos', () => {
        const piloto = new Piloto('12345', 'João Silva', true);
        expect(piloto.matricula).to.equal('12345');
        expect(piloto.nome).to.equal('João Silva');
        expect(piloto.habilitacaoAtiva).to.be.true;
    });

    // Testa o lançamento de erro se a habilitação do Piloto não estiver ativa
    it('deve lançar erro se a habilitação do Piloto não estiver ativa', () => {
        const piloto = new Piloto('67890', 'Maria Oliveira', false);
        expect(() => piloto.habilitacaoAtiva).to.throw('Piloto Maria Oliveira (67890) com habilitação inativa! Voo cancelado.');
    });
});
