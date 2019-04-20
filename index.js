Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment"); 
const botconfig = require("./botconfig.json");

require("moment-duration-format");
const ms = require("ms");   
let purple = botconfig.purple;
const ytdl = require('ytdl-core');
const mongoose = require('mongoose');
const dateFormat = require('dateformat');
const client = new Discord.Client(); 
client.commands = new Discord.Collection()
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = "-";


client.on('ready', () => {
        client.user.setActivity(`On ${client.guilds.size} Servers With ${client.users.size} Members`, { type: "PLAYING" });
        setTimeout(game2, 20000)
    });
    
    function game1() {
        client.user.setActivity(`${client.guilds.array().length} Servers || With ${client.users.size} Members`, { type: "Watching" });
        setTimeout(game2, 20000)
    }
    
    function game2() {
        client.user.setActivity(`To .help || To Get Full List Of My Commands`, { type: "LISTENING" });
        setTimeout(game3, 20000)
    }
    
    function game3() {
       client.user.setActivity(`To ${client.commands.size} Commands`, { type: "LSTENING" });
        setTimeout(game1, 20000);//these times are in ms, so 30,000 = 30 seconds
    } 
client.on('message', message => {

	
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);


	
//command handler
let commandfile = client.commands.get(command);
  let alias = client.aliases.get(command);

  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
//end of handler


});
client.login('NTQwOTExNDc4NTQ3Njc3MTg2.D0m2cA.uysMoF8ZL0laHtjRFDELkOIASok');
