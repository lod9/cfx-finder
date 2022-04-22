const Discord = require('discord.js')
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; 
const client = new Discord.Client();
const prefix = '-'

client.login('bot token girin');

client.on('ready', () => {
	console.log(`Bot,kullanıma hazir.`, "Hazir");	
});

	function Main(url, channel) {
			try {
				do {
					var req = new XMLHttpRequest();
					req.open('GET', url, false);
					req.send(null);
					var headers = req.getResponseHeader('x-citizenfx-url');
				}while(headers.includes('https'))
				if(headers.includes('https://')) {				
				} else {
					const location = client.channels.cache.get(channel);
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor('#0099ff')
					.setTitle('CFX IP BULUCU.')
					.addFields(
					{ name: 'CFX', value: url },
					{ name: 'IP Address', value: headers },
					)
					.setTimestamp()
					.setFooter('CFX IP BULUCU.');
					location.send(exampleEmbed);
				}		
			} catch(err) {
			}
	}
	

client.on("message", function(message) {
		if (!message.content.startsWith(prefix) || message.author.bot) return;
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();
    if (command === 'find') {
		const link = args[0];
			if (!args.length) {
				const exampleEmbed33 = new Discord.MessageEmbed()
					.setColor('#f00028')
					.setTitle('Error.')
					.setDescription(`Herhangi bir argüman sunmadınız, ${message.author}!`)
					.setTimestamp()
					.setFooter('Error.');
						message.channel.send(exampleEmbed33); /*Geri dönenler için geçerli olan bilgiler */
		} else if(link.includes('https://')) {
			const channel = message.channel.id;
			Main(link, channel);
		} else {
			const exampleEmbed33 = new Discord.MessageEmbed()
			.setColor('#f00028')
			.setTitle('Error.')
			.setDescription(`Invalid URL, ${message.author}!`)
			.setTimestamp()
			.setFooter('Error.');
			message.channel.send(exampleEmbed33);
		}
	}
});
