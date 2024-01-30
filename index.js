const { Client, GatewayIntentBits, Message } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "Hi from bot",
  });
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("Pong!!");
});

client.login(
  "MTIwMTg0OTIxNjQxOTUwMDA4Mg.GurgbX.DXoO2FhtGWh0sN_EcG9FD0hrXELvoVN0t4tyx8"
);
