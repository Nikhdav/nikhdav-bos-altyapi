const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('deneme!')
};

exports.config = {
  name: "taslak",
  guildOnly: true,
  aliases: [],
};
