const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.cmdsCommands = new Discord.Collection();


const cmdsFiles = await readdir("./commands/");




cmdsFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let cmds = require(`../commands/${f}`);
    client.moderationCommands.set(cmds.help.name, cmds);
    client.commands.set(cmds.help.name, cmds);
	client.aliases.set(cmds.help.alias, cmds);
	});
console.log(`loaded ${client.commands.size} commands`);
console.log(`loaded ${client.aliases.size} aliases`);
}
