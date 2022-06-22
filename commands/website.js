module.exports = {
    name: 'website',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c850c9')
        .setTitle('Website')
        .setDescription('Website:')
        .addFields({name: 'Our Website Where You Can Buy The Best Warzone Tools:', value: 'https://moodyunlocks.sellix.io'},)
        .setImage('https://media.discordapp.net/attachments/982436337074450544/982438486441328651/IMG_3796_polarr.jpg?width=676&height=676')
        .setFooter('Make Sure To Ask About The Status Before You Purchase Anything!');

        message.channel.send({embeds:[newEmbed]});
    }



}