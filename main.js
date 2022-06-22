const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '$';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Moodys Unlocks is online!');
});



client.on('messageCreate', message =>{
    
      
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'guide'){
        client.commands.get('guide').execute(message, args, Discord);}
    if(command === 'website'){
            client.commands.get('website').execute(message, args, Discord);}
    if(command === 'camoswap'){
            client.commands.get('camoswap').execute(message, args, Discord);
    }
});

client.login('OTg5MDE4Mzc0ODg3NTkxOTY4.GTVvrh.zJZH2-5jYOOBSnnh-hEvNeNG46qeu5GW-RWwYA');
