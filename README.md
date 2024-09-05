**Title: Node-RED Contrib Simple Array Key and Value**

**Description:**
Simple Array Key and Value is a custom Node-RED node that allows you to dynamically add key-value pairs to an existing array in `msg.payload`. This node is ideal for building data structures flexibly during flow processing.

**Features:**

- Dynamically Add Items: Add key-value pairs to the array in `msg.payload` configured directly via the node’s interface.
- Field Validation: Ensures that all required fields (key and value) are correctly filled before processing.
- Array Management: Initializes arrays in `msg.payload` if they do not exist, preventing errors during the flow.

**Installation:**
To install this node, you can use NPM directly in your Node-RED directory:
Command: `npm install node-red-contrib-simple-array-key-value`
Or, to install globally:
Command: `npm install -g node-red-contrib-simple-array-key-value`

**How to Use:**

1. Drag the "Simple Array Key and Value" node into your Node-RED flow.
2. Configure the key-value pairs you want to add to the array in `msg.payload`.
3. Connect the node to your flows to start dynamically adding data.

**Inputs:**

- `msg.payload`: An array where the configured key-value pairs will be added. If it's not an array, the node will initialize it as an empty array.

**Outputs:**

- `msg.payload`: Returns the array with the key-value pairs added as configured.

**Example Flow:**

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

**Contribution:**
Feel free to contribute to this project. To get started:

1. Fork the repository.
2. Create a new branch for your changes (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -m 'Added a new feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Open a Pull Request.

**License:**
Distributed under the ISC license. See LICENSE for more information.

**Contact:**
Lucas Santos - [lucassouzamda@gmail.com](mailto:lucassouzamda@gmail.com "‌")

**Project Link:**
[https://github.com/lucassantossouza/node-red-contrib-simple-array-key-value](https://github.com/lucassantossouza/node-red-contrib-simple-array-key-value "smartCard-inline")