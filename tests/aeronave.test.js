import { expect } from 'chai';
import { AeronaveParticular, AeronavePassageiros, AeronaveCarga } from '../aeronave.js';

describe('Aeronave', () => {
    // Testa a criação de uma AeronaveParticular com valores corretos
    it('deve criar uma AeronaveParticular com valores corretos', () => {
        const aeronave = new AeronaveParticular('PT-AAA', 800, 1500, 'Manutenção A');
        expect(aeronave.prefixo).to.equal('PT-AAA');
        expect(aeronave.velocidadeCruzeiro).to.equal(800);
        expect(aeronave.autonomia).to.equal(1500);
        expect(aeronave.respManutencao).to.equal('Manutenção A');
        expect(aeronave.tipo()).to.equal('Aeronave Particular Pequeno Porte');
    });

    // Testa a criação de uma AeronavePassageiros com valores corretos
    it('deve criar uma AeronavePassageiros com valores corretos', () => {
        const aeronave = new AeronavePassageiros('PT-BBB', 900, 3000, 'Companhia XYZ', 180);
        expect(aeronave.prefixo).to.equal('PT-BBB');
        expect(aeronave.velocidadeCruzeiro).to.equal(900);
        expect(aeronave.autonomia).to.equal(3000);
        expect(aeronave.nomeCIA).to.equal('Companhia XYZ');
        expect(aeronave.maxPassageiros).to.equal(180);
        expect(aeronave.tipo()).to.equal('Aeronave de Passageiros');
    });

    // Testa a criação de uma AeronaveCarga com valores corretos
    it('deve criar uma AeronaveCarga com valores corretos', () => {
        const aeronave = new AeronaveCarga('PT-CCC', 700, 2500, 'Companhia ABC', 10000);
        expect(aeronave.prefixo).to.equal('PT-CCC');
        expect(aeronave.velocidadeCruzeiro).to.equal(700);
        expect(aeronave.autonomia).to.equal(2500);
        expect(aeronave.nomeCIA).to.equal('Companhia ABC');
        expect(aeronave.pesoMax).to.equal(10000);
        expect(aeronave.tipo()).to.equal('Aeronave de Carga');
    });
});
