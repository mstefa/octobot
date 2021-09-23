const discordBot = require('../../discord-bot/index');

function sendMessage(data) {
  const channel = discordBot.channels.cache.get('825164667063631927');
  let message;
  if (data?.action === 'push') {
    message = `El usuario ${data?.pusher} a actualizado el repositorio ${data.respository}`;
  }
  else {
    message = message.action;
  }
  channel.send(message);
}

module.exports = { sendMessage };
