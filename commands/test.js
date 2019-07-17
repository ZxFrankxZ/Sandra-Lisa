const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  message.delete()
  message.channel.send("📋 Redes Sociales")
}

module.exports.help = {
  name: "test"
}