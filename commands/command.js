module.exports = {
    name: 'guide',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c850c9')
        .setTitle('Guide')
        .setDescription('Guides For All My Tools:')
        .addFields(
                {name: 'FOV AIO Guide', value: 'https://tinyurl.com/3ndw8fkd'},
                {name: 'Unlock All + Camo Swap Guide', value: 'https://tinyurl.com/yv6nmy37'},
                {name: 'Spoofer Guide', value: 'https://tinyurl.com/h5ekmrcb'},
                {name: 'Warzone VIP Guide (One Month or Day Key)', value: 'https://tinyurl.com/5t5ckxrz'},
                {name: 'Aged Account Guide', value: 'https://tinyurl.com/4rk2nax8'},
                {name: 'Want To Buy A Tool? Click the link below!', value: 'https://moodyunlocks.sellix.io'},
             )
        .setImage('https://media.discordapp.net/attachments/982436337074450544/982438486441328651/IMG_3796_polarr.jpg?width=676&height=676')
        .setFooter('Thanks For Shopping With Us! Feel Free To Leave A Vouch As It Helps Us More Than You Think');

        message.channel.send({embeds:[newEmbed]});
    }



}