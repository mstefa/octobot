require('dotenv').config();
const server = require('./src/index.js');
const discordBot = require('./discord-bot/index');
// const { conn } = require('./src/db.js');
const { PORT, DISCORDTOKEN } = process.env;

// Starting disccord bot
// Login to Discord with your client's token
discordBot.login(DISCORDTOKEN);


// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
console.log('starting server');
server.listen(PORT, () => {
  console.log('%s listening at ' + PORT); // eslint-disable-line no-console
});
// });
