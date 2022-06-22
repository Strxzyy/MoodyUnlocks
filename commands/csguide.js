module.exports = {
    name: 'camoswap',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c850c9')
        .setTitle('Camo Swap Guide')
        .setDescription('Camo Swap Guide:')
        .setLink('https://cdn.discordapp.com/attachments/983578281439821885/989061496443125790/2022-06-22_00-51-14.mp4')
        .setFooter('Make Sure To Ask About The Status Before You Purchase Anything!');

        message.channel.send({embeds:[newEmbed]});
    }



}