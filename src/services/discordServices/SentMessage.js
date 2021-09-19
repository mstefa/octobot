const discordBot = require('../../../discord-bot/index');

function sendMessage(message) {
  const channel = discordBot.channels.cache.get('825164667063631927');
  channel.send(message);
}

module.exports = sendMessage;
