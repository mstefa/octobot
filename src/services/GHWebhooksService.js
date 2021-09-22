const { SentMessage } = require('./BotServices');

function processEvent(payload) {
  console.log(payload);
  
  const message = {
    action: payload.action,
    sender: payload.sender,
    respository: payload.respository.name,
  };

  SentMessage(message);
}

module.exports = { processData: processEvent };
