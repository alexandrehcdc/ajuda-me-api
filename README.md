# ajuda-me-api

Api para o app de primeiros socorros, com intuito de alimentar a aplicação com os dados de geolocalização e geração de indicadores.

## Instruções e pré-requisitos

É necessário ter o [Node.JS](https://nodejs.org/) e algum gerenciador de pacotes como o [NPM](https://npmjs.com/) ou [Yarn](https://yarnpkg.com/) instalado para executar e utilizar as bibliotecas utilizadas nesse projeto, seguido dos passos a seguir:

```bash
git clone https://github.com/alexandrehcdc/ajuda-me.git # comando para clonar o projeto
cd ajuda-me-api #acessar a página
yarn #ou npm install para instalar as dependências
```

## Ferramentas e bibliotecas a serem utilizadas
* [Express](https://www.npmjs.com/package/express): Biblioteca para criação de server HTTP e estrutura de rotas para utilização de endpoints RESTful
* [Mongoose](https://www.npmjs.com/package/mongoose): ODM para operações com o banco de dados MongoDB
* [Mocha](https://www.npmjs.com/package/mocha) e [Chai](https://www.npmjs.com/package/chai): Bibliotecas para criar a suíte de testes e asserções para testes unitários e de integração
* [Eslint](https://www.npmjs.com/package/eslint): Ferramenta para reforçar as boas práticas de código e padrões de escrita no projeto
