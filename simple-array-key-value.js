module.exports = function (RED) {
  function SimpleArrayKeyValueNode(config) {  // Função renomeada para refletir o novo nome
    RED.nodes.createNode(this, config);
    var node = this;

    node.on('input', function (msg) {
      // Verifica se msg.payload é um array; se não, inicializa como array vazio
      let array = Array.isArray(msg.payload) ? msg.payload : [];

      // Captura corretamente os itens do config (definidos pelo usuário na interface)
      let items = config.items || [];

      // Itera sobre os itens configurados e os adiciona ao array
      items.forEach(item => {
        array.push({
          key: item.key || 'New Key', // Usa o valor configurado ou um padrão
          value: item.value || 'Value'
        });
      });

      // Atualiza o payload com o array modificado
      msg.payload = array;
      node.send(msg);
    });
  }

  // Registra o tipo de nó com o nome "simple-array-key-value"
  RED.nodes.registerType("simple-array-key-value", SimpleArrayKeyValueNode);  // Nome e função alinhados
}
