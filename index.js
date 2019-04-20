const discord = require(`discord.js`)
const bot = new discord.Client({ disableEveryone: false, fetchAllMembers: true })
const fs = require(`fs`)
const ms = require("ms")
const chalk = require("chalk")
const canvas = require("canvas")
const Util = require('discord.js');
bot.commands = new discord.Collection()
const moment = require("moment")
const config = require("./config.json")
const prefix = "!"
const motm = require('moment-timezone');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))
const botconfig = require("./botconfig.json")
let purple = botconfig.purple;
let coins = require("./coins.json");
let xp = require("./xp.json");
const cooldowns = new discord.Collection();
bot.config = config;
const version = "1.0";
const db = require('quick.db');
let invites = {};
const log = message => {
console.log(`[LOG ${moment().format("HH:mm:ss")}] ${message}`)
}
const error = message => {
console.log(`[ERR ${moment().format("HH:mm:ss")}] ${message}`)
}




bot.on('ready', () => {
  bot.user.setGame(`On ${bot.guilds.size} Servers With ${bot.users.size} Members | !Help`, 'https://www.twitch.tv/bangamer2005/')
})   




fs.readdir("./commands/", (err, files) => {
  if (err) log(err)
  let jsfile = files.filter(f => f.split(`.`).pop() === `js`)
  log(`Loading ${jsfile.length} commands...`)
  if (jsfile.length <= 0) {
    log(`Couldn't find commands.`)
    return
  }
  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    if (!props.help) return error(`${f} failed to load. Please add !help!`);
    log(`${f} loaded!`)
    bot.commands.set(props.help.name, props)
  })
})

const wait = require('util').promisify(setTimeout);
bot.on("ready", () => {

  let membercount = bot.users.size - 2
  log(`Logged in as ${bot.user.tag}`);
  log(`${membercount} users, ${bot.channels.size} channels and ${bot.guilds.size} guilds. Version ${version}.`);
  //bot.user.setActivity(`for ${config.prefix}help | ${membercount} members in ${bot.guilds.size} guilds!`, { type: "STREAMING", url: 'https://www.twitch.tv/PiggyPlex' })
  let gInterval = setInterval(async () => {
    let all = await db.startsWith(`giveaways_`);
    all.map(async (g) => {
      let gid = g.guildID;
      let id = g.channelID;
      let mid = g.messageID;
      let t = g.t;
      let date = new Date().getTime();
      if (!gid || !id || !mid || !t) return;
      if (date < t) return;
      let guild = bot.guilds.get(gid);
      if (!guild) return;
      let channel = guild.channels.get(id);
      if (!channel) return;
      let message = await channel.fetchMessage(mid);
      if (!message) return;
      
    });
  },1000);
})

let lastMessages = {};
let repeatedCount = {};















bot.on(`message`, async message => {
  
  
 
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let coinAmt = Math.floor(Math.random() * 15) + 1;
  let baseAmt = Math.floor(Math.random() * 15) + 1;
  console.log(`${coinAmt} ; ${baseAmt}`);

  if(coinAmt === baseAmt){
    coins[message.author.id] = {
      coins: coins[message.author.id].coins + coinAmt
    };
  fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });

  }

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 1500;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
  
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
  

  


if (message.author.bot) return;
if(!message.channel.guild)return;
if (!profile[message.author.id]) profile[message.author.id] = {
  tite: 'Super User',
  rep: 0,
  reps: 'NOT YET',
  lastDaily:'Not Collected',
  level: 0,
  points: 0,
  credits: 150,
};


fs.writeFile('profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})


       
  

  if (message.author.bot) return
  /*
  let lastMessage = lastMessages[message.author.id];
  if (lastMessage == message.content.toLowerCase()) { // checks if message is the same as lastMessage
    if (isNaN(repeatedCount[message.author.id])) { // checks if it is a number
      repeatedCount[message.author.id] = 1;
    } else {
      repeatedCount[message.author.id]++;
    };
  } else {
    repeatedCount[message.author.id] = 0;
  };
  if (repeatedCount[message.author.id] == 1) {
    await message.delete().catch(O_o=>{});
    sm.delete(5000).catch(O_o=>{});
    return;
  };
  if (repeatedCount[message.author.id] == 2) {
    warn(bot,message,message.member,'[AutoMod] Sending the same message three times in a row (detected spam)',true);
    message.delete().catch(O_o=>{});
    return;
  };
  if (repeatedCount[message.author.id] > 2) {
    return message.delete().catch(O_o=>{});
  };
  lastMessages[message.author.id] = message.content.toLowerCase();
  */
  let content = message.content.split(" ")
  let command = content[0]
  let args = content.slice(1)
  let prefix = await db.fetch(`${message.guild.id}.prefix`) ? await db.fetch(`${message.guild.id}.prefix`) : config.prefix;
  if (message.content.startsWith(`<@${bot.user.id}>`) || message.content.startsWith(`<@!${bot.user.id}>`)) {
    var temp = prefix;
    prefix = message.content.startsWith(`<@${bot.user.id}>`) ? `<@${bot.user.id}>` : `<@!${bot.user.id}>`;
    if (content == prefix) {
      message.channel.send(`Hey! My prefix is: ${temp}`);
    }
  }
  if (message.content.startsWith(prefix)) {
    let commandfile = bot.commands.get(command.slice(prefix.length).toLowerCase())
    if (commandfile) {
      commandfile.run(bot, message, args)
    } else {
      let notfoundembed = new discord.RichEmbed()
        .setTitle("**Command not Found!**")
        .setColor('BLUE')
        .setDescription("Please type \`-help\` to get a list of all of the available commands!")
      //message.channel.send(notfoundembed)
    }
  }
})

bot.on("debug", e => {
  log(chalk.bgGreen(e))
})

bot.on("warn", e => {
  log(chalk.bgYellow(e))
})

bot.on("error", e => {
  log(chalk.bgRed(e))
})























  bot.on("guildDelete", async guild => {
  let guildCreateDelete = bot.channels.get("560896374623698952");
  
  let leaveEmbed = new discord.RichEmbed()
    .setTitle('<:not_yet:557275118737424404> Guild Left <:not_yet:557275118737424404>')
    .setThumbnail(guild.iconURL)
    .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)
  
  guildCreateDelete.send(leaveEmbed);
});
bot.on("guildCreate", async guild => {
  let guildCreateDelete = bot.channels.get("560896374623698952");
  let leaveEmbed = new discord.RichEmbed()
    .setTitle('<:true12:557285297856184320> Guild Joined <:true12:557285297856184320>')
    .setThumbnail(guild.iconURL)
    .addField('Guild Info', `Name: **${guild.name}** \nID: **${guild.id}**`)

  
  guildCreateDelete.send(leaveEmbed);
});









bot.login(process.env.TOKEN)

