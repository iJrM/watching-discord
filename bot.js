const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "d";
var adminprefix = '!'
const developers = ['499540032277708824'] //الاي دى حقك
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(prefix + 'p')) {
    client.user.setGame(argresult);
      message.channel.send(`**${argresult}**`)
  } else
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'w')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`{argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'l')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'o')) {
    client.user.setGame(argresult, "https://www.twitch.tv/One");
      message.channel.send(`**${argresult}`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
 
 
 
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
