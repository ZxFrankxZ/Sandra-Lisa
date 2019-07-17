const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  message.delete()
  let staffRole = message.guild.roles.get("596923580906864642");
  let staff = message.guild.roles.get("596697847651500043")
  if(!message.author.id === "380355916278530048" && !message.author.id === "209399350600794113" && !message.guild.member(message.author).roles.has(staffRole.id) && !message.guild.member(message.author).roles.has(staff.id)) return;
  let embed1 = new Discord.RichEmbed()
  .setTitle("🔸**Redes Sociales**🔸")
  .addField("💜**Instagram**", "https://www.instagram.com/sandra.afi/")
  .addField("💜**Twitter**", "https://twitter.com/ghostedbabe")
  .setThumbnail("https://cdn.discordapp.com/attachments/373599659706417183/600424778137862190/1.png")
  .setColor("PURPLE")
  
  let embed2 = new Discord.RichEmbed()
  .setTitle("🔸**Directos & Videos**🔸")
  .addField("🛑**Twitch**", "https://www.twitch.tv/ghostedbabe")
  .addField("🛑**YouTube**", "https://www.youtube.com/channel/UCYvLHkTui1vLXS4C7zu6V2A")
  .setThumbnail("https://cdn.discordapp.com/attachments/373599659706417183/600426389837054047/Videos__Directos.gif")
  .setColor("PURPLE")
  let canal = client.channels.get("599993610796007474")
  message.channel.send(embed1)
  message.channel.send(embed2)
}

module.exports.help = {
  name: "redes"
}