# Sistema de Vendas e Compras

Este é um sistema de backend para gerenciar o processo de vendas e compras de produtos. O fluxo de operação inclui:

1. **Cadastro de Vendas**: O sistema permite cadastrar vendas com múltiplos produtos.
2. **Cadastro de Compras**: Permite registrar compras que atendem a uma ou mais vendas.
3. **Consulta de Vendas e Compras**: Oferece endpoints para visualizar todas as vendas e compras.

## Endpoints

### Vendas

- **POST /vendas**: Cria uma nova venda.
- **GET /vendas**: Lista todas as vendas.

### Compras

- **POST /compras**: Cria uma nova compra.
- **GET /compras**: Lista todas as compras.

## Instalação

1. Clone o repositório.
2. Execute `npm install` para instalar as dependências.
3. Configure o arquivo `.env` com as variáveis de ambiente necessárias.
4. Execute `npm run start` para iniciar o servidor.

## Testes

- Execute `npm run test` para rodar os testes unitários.
