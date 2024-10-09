import { expect } from 'chai';
import { Aerovia, ServicoAerovias } from '../aerovia.js';

describe('Aerovia', () => {
    // Testa a criação de uma Aerovia com valores corretos
    it('deve criar uma Aerovia com valores corretos', () => {
        const aerovia = new Aerovia('1', 'São Paulo', 'Rio de Janeiro', 350);
        expect(aerovia.id).to.equal('1');
        expect(aerovia.origem).to.equal('São Paulo');
        expect(aerovia.destino).to.equal('Rio de Janeiro');
        expect(aerovia.tamanho).to.equal(350);
    });

    // Testa o retorno da lista de origem e destino com o Serviço de Aerovias
    it('deve retornar a lista de origem e destino com o Serviço de Aerovias', () => {
        const aerovia1 = new Aerovia('1', 'São Paulo', 'Rio de Janeiro', 350);
        const aerovia2 = new Aerovia('2', 'Brasília', 'Salvador', 1200);
        const resultado = ServicoAerovias([aerovia1, aerovia2]);
        expect(resultado).to.deep.equal([
            { origem: 'São Paulo', destino: 'Rio de Janeiro' },
            { origem: 'Brasília', destino: 'Salvador' }
        ]);
    });
});
