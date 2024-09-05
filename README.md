# Node-RED Contrib Simple Array Key and Value

![Node-RED](https://img.shields.io/badge/Node--RED-Flow--Based-lightgrey)

**Simple Array Key and Value** é um nó customizado para o Node-RED que permite adicionar dinamicamente pares de chave e valor a um array existente no `msg.payload`. Este nó é ideal para construir estruturas de dados de forma flexível durante o processamento de fluxos.

## Funcionalidades

- **Adicionar Itens Dinamicamente**: Adicione pares de chave e valor ao array no `msg.payload` configurados diretamente pela interface do nó.
- **Validação de Campos**: Assegura que todos os campos necessários (chave e valor) sejam preenchidos corretamente antes de processar.
- **Gestão de Arrays**: Inicializa arrays em `msg.payload` caso não existam, evitando erros durante o fluxo.

## Instalação

Para instalar este nó, você pode usar o NPM diretamente no diretório do seu Node-RED:

```bash
npm install node-red-contrib-simple-array-key-value
