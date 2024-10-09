import { expect } from 'chai';
import { PlanoDeVoo, ServicoPlanos } from '../planoDeVoo.js';

describe('PlanoDeVoo', () => {
    // Testa a criação de um PlanoDeVoo com valores corretos
    it('deve criar um PlanoDeVoo com valores corretos', () => {
        const plano = new PlanoDeVoo('001', '12345', '1', '2024-08-30', '14:00', 10000, ['Slot1', 'Slot2'], false);
        expect(plano.id).to.equal('001');
        expect(plano.matriculaPiloto).to.equal('12345');
        expect(plano.idAerovia).to.equal('1');
        expect(plano.data).to.equal('2024-08-30');
        expect(plano.horario).to.equal('14:00');
        expect(plano.altitude).to.equal(10000);
        expect(plano.slots).to.deep.equal(['Slot1', 'Slot2']);
        expect(plano.cancelado).to.be.false;
    });

    // Testa a listagem dos IDs de planos de voo com o Serviço de Planos de Voo
    it('deve listar IDs de planos de voo com o Serviço de Planos de Voo', () => {
        const plano1 = new PlanoDeVoo('001', '12345', '1', '2024-08-30', '14:00', 10000, ['Slot1', 'Slot2'], false);
        const plano2 = new PlanoDeVoo('002', '67890', '2', '2024-08-30', '16:00', 8000, ['Slot3'], true);
        expect(() => ServicoPlanos([plano1, plano2])).to.not.throw();
    });
});
