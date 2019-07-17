const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const fs = require("fs")
const client = new Discord.Client();

client.login(process.env.SECRET)
client.env = require('./enviado.json')

client.on("ready", () => {
  
  console.log("Online!");
  
  /*client.user.setPresence({
    status: 'online',
    game: {
      name: "MANTENIMIENTO"
    }
  })*/
  
  //console.log(client.guilds.get("596696084605304852").memberCount)
  let members = client.guilds.get("596696084605304852").memberCount
  function intervalo() {
    members >= 600 && client.env[600].alcanzado === false ? a600() : members >= 850 && client.env[850].alcanzado === false ? a850() : members >= 1000 && client.env[1000].alcanzado === false ? a1000() : members >= 1500 && client.env[1500].alcanzado === false ? a1500 : members >= 2000 && client.env[2000].alcanzado === false ? a2000 : "";
  }
  setInterval(intervalo, 5000)
  function a600() {
    let mensaje = `
      📢 HOLA A TODOS ES UN PLACER ANUNCIAR QUE HEMOS LLEGADO A LA CANTIDAD DE 600 MIEMBROS EN EL DISCORD. @everyone

      🎉🎊 MUCHAS GRACIAS 💓 🎊🎉
    `
    let canal = client.channels.get("596696084605304856")
    canal.send(mensaje)
    client.env[600] = {
                alcanzado: true
            };
      
      fs.writeFile ("./enviado.json", JSON.stringify (client.env, null, 4), err => {
                if (err) throw err;
            })
  }
  
    function a850() {
    let mensaje = `
      📢 HOLA A TODOS ES UN PLACER ANUNCIAR QUE HEMOS LLEGADO A LA CANTIDAD DE 850 MIEMBROS EN EL DISCORD. @everyone

      🎉🎊 MUCHAS GRACIAS 💓 🎊🎉
    `
    let canal = client.channels.get("596696084605304856")
    canal.send(mensaje)
    client.env[850] = {
                alcanzado: true
            };
      
      fs.writeFile ("./enviado.json", JSON.stringify (client.env, null, 4), err => {
                if (err) throw err;
            })
  }
  
    function a1000() {
    let mensaje = `
      📢 HOLA A TODOS ES UN PLACER ANUNCIAR QUE HEMOS LLEGADO A LA CANTIDAD DE 1000 MIEMBROS EN EL DISCORD. @everyone

      🎉🎊 MUCHAS GRACIAS 💓 🎊🎉
    `
    let canal = client.channels.get("596696084605304856")
    canal.send(mensaje)
    client.env[1000] = {
                alcanzado: true
            };
      
      fs.writeFile ("./enviado.json", JSON.stringify (client.env, null, 4), err => {
                if (err) throw err;
            })
  }
  
    function a1500() {
    let mensaje = `
      📢 HOLA A TODOS ES UN PLACER ANUNCIAR QUE HEMOS LLEGADO A LA CANTIDAD DE 1500 MIEMBROS EN EL DISCORD. @everyone

      🎉🎊 MUCHAS GRACIAS 💓 🎊🎉
    `
    let canal = client.channels.get("596696084605304856")
    canal.send(mensaje)
    client.env[1500] = {
                alcanzado: true
            };
      
      fs.writeFile ("./enviado.json", JSON.stringify (client.env, null, 4), err => {
                if (err) throw err;
            })
  }
    function a2000() {
    let mensaje = `
      📢 HOLA A TODOS ES UN PLACER ANUNCIAR QUE HEMOS LLEGADO A LA CANTIDAD DE 2000 MIEMBROS EN EL DISCORD. @everyone

      🎉🎊 MUCHAS GRACIAS 💓 🎊🎉
    `
    let canal = client.channels.get("596696084605304856")
    canal.send(mensaje)
    client.env[2000] = {
                alcanzado: true
            };
      
      fs.writeFile ("./enviado.json", JSON.stringify (client.env, null, 4), err => {
                if (err) throw err;
            })
  }
})

client.commands = new Discord.Collection();

fs.readdir("./commands", (err, files) => {
  if(err) console.error(err);
  let jsFiles = files.filter(f => f.split(".").pop() === "js");
  if(jsFiles.length <= 0) {
    console.log("No hay comandos para cargar");
    return;
  }
  console.log(`Cargando ${jsFiles.length} comandos`);

  jsFiles.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    client.commands.set(props.help.name, props)
  });
});

let prefix = "$"
client.on("message", async(message) => {
  let guild = message.guild;
    let args = message.content.split(" ").slice(1).join(" ");
  let command = message.content.toLowerCase().split(" ")[0];
  if(!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  if (cmd)
    cmd.run(client, message, args);
});