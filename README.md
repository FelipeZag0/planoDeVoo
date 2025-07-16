# README do Projeto de Gestão de Aeronaves e Planos de Voo

## Descrição
Este projeto é um sistema para gestão de aeronaves e planos de voo, desenvolvido em JavaScript. O sistema permite gerenciar pilotos, aeronaves, aerovias e planos de voo, utilizando princípios de orientação a objetos.

## Funcionalidades
- **Gestão de Aeronaves**: Cadastro e classificação de aeronaves (Particular, Comercial, Passageiros, Carga).
- **Gestão de Pilotos**: Registro de pilotos com validação de habilitação ativa.
- **Gestão de Aerovias**: Definição de rotas aéreas com origem, destino e tamanho.
- **Gestão de Planos de Voo**: Criação e monitoramento de planos de voo com detalhes como horário, altitude e slots.

## Estrutura do Projeto
```
.
├── aeronave.js            # Classes relacionadas a aeronaves
├── aerovia.js             # Classes e serviços para aerovias
├── piloto.js              # Classe Piloto
├── planoDeVoo.js          # Classe PlanoDeVoo e serviços
├── servicos.js            # Serviços para gerenciamento
├── index.js               # Arquivo principal de execução
├── package.json           # Configuração do projeto e dependências
├── tests/                 # Testes unitários
│   ├── aeronave.test.js
│   ├── aerovia.test.js
│   ├── piloto.test.js
│   └── planoDeVoo.test.js
└── README.md              # Documentação do projeto
```

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/FelipeZag0/planoDeVoo.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Uso
Execute o projeto com o seguinte comando:
```bash
npm start
```

O arquivo `index.js` contém exemplos de uso do sistema, incluindo a criação de instâncias de pilotos, aeronaves, aerovias e planos de voo.

## Testes
Para executar os testes unitários e validar o funcionamento das classes e serviços, utilize:
```bash
npm test
```

## Dependências
- [bycontract](https://www.npmjs.com/package/bycontract): Validação de contratos em JavaScript.

