// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv');

// config dot env
dotenv.config();
const token = process.env.DISCORDTOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


// Seting commands
client.commands = new Collection();
const commandFiles = fs
  .readdirSync('./discord-bot/commands/')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// interactions
client.once('ready', (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  }
  catch (error) {
    console.error(error);
    return interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

// Login to Discord with your client's token
client.login(token);

module.exports = client;
