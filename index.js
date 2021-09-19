require('dotenv').config();
const server = require('./src/server.js');

// const { conn } = require('./src/db.js');
const { PORT } = process.env;

// Syncing all the models at once.
// conn.sync({ force: false }).then(() => {
console.log('starting server');
server.listen(PORT, () => {
  console.log('%s listening at ' + PORT); // eslint-disable-line no-console
});
// });
