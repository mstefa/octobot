const { sendMessage } = require('./BotServices');

function processEvent(payload) {
  console.log(payload);
  let message = {};

  if (payload.commits.lenght() > 0) {
    message = {
      action : 'push',
      pusher: payload.pusher?.name,
      respository: payload.respository?.name,
    };
  }
  else {
    message = {
      action: payload.action,
      sender: payload.sender?.login,
      respository: payload.respository?.name,
    };
  }

  sendMessage(message);
}

module.exports = { processEvent };
