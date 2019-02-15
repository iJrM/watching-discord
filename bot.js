const Discord = require("discord.js");
const client = new Discord.Client(); 

client.on('ready', () => { console.log(`Logged in as ${client.user.tag} !`);
client.user.setActivity("Netfilx: 13 Reason Why.",{type: 'WATCHING'}); }); 




client.login("mfa.hwaqn_b1PsLoP3I3F3iAlZ5SvXMs1Npi3wx_Qh80JnkIsA9MnKvRkAtxTA4XtzUPNAbE6sMzBoaPvHq7_jDQ")
