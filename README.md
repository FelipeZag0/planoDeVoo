# Sistema de Gerenciamento de Voos Aéreos

Este projeto é um sistema de gerenciamento de voos aéreos que permite modelar e gerenciar pilotos, aeronaves, aerovias e planos de voo. O sistema inclui validações de contratos e testes para garantir a integridade dos dados e o correto funcionamento das operações.

## Tecnologias Utilizadas

- **JavaScript** - Linguagem principal
- **Mocha + Chai** - Para testes unitários
- **bycontract** - Biblioteca para validação de contratos
- **Node.js** - Ambiente de execução

## Como Instalar e Rodar o Projeto

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes)

### Passos de instalação

1. Clone o repositório:
```bash
git clone https://github.com/FelipeZag0/planoDeVoo.git
cd planoDeVoo
```

2. Instale as dependências:
```bash
npm install bycontract mocha chai
```

3. Execute os testes:
```bash
npx mocha tests
```

## Como Usar o Projeto

### Criando um piloto
```javascript
import { Piloto } from './src/piloto.js';

const piloto = new Piloto('12345', 'João Silva', true);
console.log(piloto.nome); // João Silva
```

### Criando uma aeronave
```javascript
import { AeronavePassageiros } from './src/aeronave.js';

const aviao = new AeronavePassageiros('PT-BBB', 900, 3000, 'Companhia XYZ', 180);
console.log(aviao.tipo()); // Aeronave de Passageiros
```

### Gerenciando aerovias
```javascript
import { Aerovia, ServicoAerovias } from './src/aerovia.js';

const aerovia1 = new Aerovia('1', 'São Paulo', 'Rio de Janeiro', 350);
const aerovia2 = new Aerovia('2', 'Brasília', 'Salvador', 1200);
const rotas = ServicoAerovias([aerovia1, aerovia2]);
```

### Criando planos de voo
```javascript
import { PlanoDeVoo } from './src/planoDeVoo.js';

const plano = new PlanoDeVoo('001', '12345', '1', '2024-08-30', '14:00', 10000, ['Slot1'], false);
console.log(plano.altitude); // 10000
```

## Estrutura do Projeto

```
projeto-gerenciamento-voos/
├── src/
│   ├── aeronave.js        # Classes de aeronaves (Particular, Passageiros, Carga)
│   ├── aerovia.js         # Classe Aerovia e serviço de aerovias
│   ├── piloto.js          # Classe Piloto
│   └── planoDeVoo.js      # Classe PlanoDeVoo e serviço de planos
├── tests/
│   ├── aeronave.test.js   # Testes para aeronaves
│   ├── aerovia.test.js    # Testes para aerovias
│   ├── piloto.test.js     # Testes para pilotos
│   └── planoDeVoo.test.js # Testes para planos de voo
├── package.json
└── README.md
```

## Funcionalidades Principais

- **Gestão de Pilotoss**:
  - Criação com matrícula, nome e status de habilitação
  - Validação de habilitação ativa

- **Modelagem de Aeronaves**:
  - Tipos: Particular, Passageiros e Carga
  - Atributos específicos para cada tipo
  - Validação de parâmetros

- **Gerenciamento de Aerovias**:
  - Criação com ID, origem, destino e tamanho
  - Serviço para listagem de rotas

- **Planos de Voo**:
  - Criação com detalhes completos (ID, piloto, aerovia, data, horário, altitude)
  - Validação de slots obrigatórios
  - Serviço para listagem de IDs de planos