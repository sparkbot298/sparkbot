const { Client, Intents, MessageEmbed } = require("discord.js");
const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

bot.once('ready', () => {
    const channel = bot.channels.cache.get('channel id');
channel.send(`**:white_check_mark: The bot has started/restarted**\n${bot.ws.ping} ms, ${bot.guilds.cache.size} servers. Use \`!help\` to get commands`);
	console.log('Ready!');
    bot.user.setActivity(`!help`, { type: "STREAMING", url: "https://twitch.tv/sparkfire298" })
});


bot.on("guildCreate", () => {
    console.log("Added to one guild!");
const channel = bot.channels.cache.get('channel id');
channel.send(`Added to a new server! I am now in ${bot.guilds.cache.size} servers.`);
})

bot.on("guildDelete", () => {
    const channel = bot.channels.cache.get('channel id');
channel.send(`Removed from a server. I am now in ${bot.guilds.cache.size} servers.`);
})


bot.on('message', message => {
		if (message.content === '!help') {
		message.channel.send('```sparkbot\nPrefix: !\nCommands: scott, funny, invite, help, updatelog\n\nBot made by Sparkfire298\nv0.2```');
	}
    if (message.content === '!scott') {
		message.channel.send('Hey all, Scott here.');
	}
    if (message.content === '!funny') {
		message.channel.send('https://cdn.discordapp.com/attachments/975450469948334201/975780431670681630/unknown.png');
        message.react('🤣');
	}
    if (message.content === '!invite') {
		message.channel.send('https://discord.com/api/oauth2/authorize?client_id=975699960869838869&permissions=8&scope=bot');
	}
    if (message.content === '!updatelog') {
		message.channel.send('```UPDATE LOG\n\nVersions: 0.1, 0.2\n\n0.1:\n - Added !scott, !funny, !invite, !help, !updatelog\n- This is the first official version of the bot!\n\n\n0.2:\n- Added join command\n- Fixed funny command\n\n\n0.3:\n- Fixed updatelog\n- Updated the start echo```');
	}
    if (message.content === `<@${bot.user.id}>`) {
		message.channel.send('Someone pinged me?\nMy prefix is **!**, type **!help** to view commands!');
	}
  


});

bot.login("token");
