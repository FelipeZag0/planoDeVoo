Projeto de Gestão de Aeronaves e Planos de Voo

Descrição
Este projeto é um sistema para gestão de aeronaves e planos de voo, desenvolvido em JavaScript. O sistema permite gerenciar pilotos, aeronaves, aerovias e planos de voo, utilizando princípios de orientação a objetos.


Estrutura do Projeto
O projeto é composto pelos seguintes arquivos e pastas:

    aeronave.js: Define classes relacionadas a aeronaves, como Aeronave, AeronaveParticular, AeronaveComercial, AeronavePassageiros e AeronaveCarga.
    aerovia.js: Define a classe Aerovia e o serviço ServicoAerovias para gerenciamento de aerovias.
    piloto.js: Define a classe Piloto.
    planoDeVoo.js: Define a classe PlanoDeVoo e o serviço ServicoPlanos para gerenciamento de planos de voo.
    servicos.js: Define os serviços ServicoPilotos, ServicoAeronaves, ServicoAerovias e ServicoPlanos para gerenciar pilotos, aeronaves, aerovias e planos de voo, respectivamente.
    index.js: Arquivo principal para execução do sistema e demonstração de uso das classes e serviços.
    package.json: Gerencia dependências do projeto e scripts de execução.
    tests/: Pasta contendo arquivos de teste para validar o funcionamento das classes e serviços.


Instalação
Para executar o projeto, siga os passos abaixo:

    Instale as dependências:
    npm install

    Execute o projeto:
    npm start

Uso
    O arquivo index.js contém um exemplo de uso do sistema. Ele cria instâncias de pilotos, aeronaves, aerovias e planos de voo, e utiliza os serviços para exibir informações no console.

Testes
    Os testes do projeto estão localizados na pasta tests/. Esses testes garantem que as classes e métodos funcionem conforme esperado. Execute os testes para verificar a integridade do sistema.

Estrutura de Pastas e Arquivos
aeronave.js
    Classes: Aeronave, AeronaveParticular, AeronaveComercial, AeronavePassageiros, AeronaveCarga

aerovia.js
    Classe: Aerovia
    Função: ServicoAerovias

piloto.js
    Classe: Piloto

planoDeVoo.js
    Classe: PlanoDeVoo
    Função: ServicoPlanos

servicos.js
    Funções: ServicoPilotos, ServicoAeronaves, ServicoAerovias, ServicoPlanos

index.js
    Exemplo de uso

package.json
    Dependências e scripts

tests/
    Testes de unidade para as classes e serviços
