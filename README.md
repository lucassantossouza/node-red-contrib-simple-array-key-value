**Título: Node-RED Contrib Simple Array Key and Value**

**Descrição:**
Simple Array Key and Value é um nó customizado para o Node-RED que permite adicionar dinamicamente pares de chave e valor a um array existente no `msg.payload`. Este nó é ideal para construir estruturas de dados de forma flexível durante o processamento de fluxos.

**Funcionalidades:**

- Adicionar Itens Dinamicamente: Adicione pares de chave e valor ao array no `msg.payload` configurados diretamente pela interface do nó.
- Validação de Campos: Assegura que todos os campos necessários (chave e valor) sejam preenchidos corretamente antes de processar.
- Gestão de Arrays: Inicializa arrays em `msg.payload` caso não existam, evitando erros durante o fluxo.

**Instalação:**
Para instalar este nó, você pode usar o NPM diretamente no diretório do seu Node-RED:
Comando: `npm install node-red-contrib-simple-array-key-value`
Ou, para instalar globalmente:
Comando: `npm install -g node-red-contrib-simple-array-key-value`

**Como Usar:**

1. Arraste o nó "Simple Array Key and Value" para o seu fluxo Node-RED.
2. Configure os pares de chave e valor que você deseja adicionar ao array em `msg.payload`.
3. Conecte o nó aos seus fluxos para começar a adicionar dinamicamente os dados.

**Entradas:**

- `msg.payload`: Um array onde os pares de chave e valor configurados serão adicionados. Se não for um array, o nó irá inicializar como um array vazio.

**Saídas:**

- `msg.payload`: Retorna o array com os pares de chave e valor adicionados conforme configurado.

**Exemplo de Fluxo:**

```json
[{
    "id": "d6562f38c09bfba5",
    "type": "inject",
    "z": "a790480fed0e10dd",
    "name": "",
    "props": [{
        "p": "payload"
      },
      {
        "p": "topic",
        "vt": "str"
      }
    ],
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "topic": "",
    "payload": "",
    "payloadType": "date",
    "x": 300,
    "y": 140,
    "wires": [
      [
        "122509cc57501a0f"
      ]
    ]
  },
  {
    "id": "bd34406756bcaa01",
    "type": "debug",
    "z": "a790480fed0e10dd",
    "name": "debug 25",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "true",
    "targetType": "full",
    "statusVal": "",
    "statusType": "auto",
    "x": 780,
    "y": 140,
    "wires": []
  },
  {
    "id": "122509cc57501a0f",
    "type": "simple-array-key-value",
    "z": "a790480fed0e10dd",
    "name": "",
    "items": [{
        "key": "asd",
        "value": "asd"
      },
      {
        "key": "asd",
        "value": "asd"
      },
      {
        "key": "asd",
        "value": "asd"
      },
      {
        "key": "asd",
        "value": "asd"
      },
      {
        "key": "asd",
        "value": "asd"
      },
      {
        "key": "asd",
        "value": "asd"
      }
    ],
    "x": 560,
    "y": 140,
    "wires": [
      [
        "bd34406756bcaa01"
      ]
    ]
  }
]
```

**Contribuição:**
Sinta-se à vontade para contribuir com este projeto. Para começar:

1. Fork o repositório.
2. Crie uma nova branch para suas alterações (`git checkout -b minha-nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionei uma nova feature'`).
4. Push para a branch (`git push origin minha-nova-feature`).
5. Abra um Pull Request.

**Licença:**
Distribuído sob a licença ISC. Veja LICENSE para mais informações.

**Contato:**
Lucas Santos - [lucassouzamda@gmail.com](mailto:lucassouzamda@gmail.com "‌Node-RED Contrib Simple Array Key and Value")

**Link do Projeto:**
[https://github.com/lucassantossouza/node-red-contrib-simple-array-key-value](https://github.com/lucassantossouza/node-red-contrib-simple-array-key-value "smartCard-inline")