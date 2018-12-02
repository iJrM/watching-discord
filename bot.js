const Discord = require("discord.js");
const client = new Discord.Client(); 

client.on('ready', () => { console.log(`Logged in as ${client.user.tag} !`);
client.user.setActivity("الامتحانات قربت😲📄",{type: 'WATCHING'}); }); 




client.login("NDY5MTAyNzg0Nzg5MzQ4MzYy.Dt2Yyw.MrEvmniRKO9yqaFSbPr2WSgXTXM")
