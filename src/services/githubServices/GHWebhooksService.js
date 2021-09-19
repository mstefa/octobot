const SentMessage = require('../discordServices/SentMessage');

function processData(json) {
  console.log(json);
  SentMessage('hola!');
}

module.exports = processData;
