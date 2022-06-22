const Discord = require("discord.js")
let axios = require("axios")

module.exports = {
    name: "testavatar",
    category: "Texting",
    description: "Get the Avatar of an User",
    usage: "avatar [@USER]",
    run: async(client, message, args, cmduser, text, prefix) => {


    let user = message.mention.users.first() || message.author;
        try {

            const data = await axios.get(`https://discord.com/api/users/${user.id}`, {
                headers: {
                    Authorization: `Bot ${client.token}`
                }
            }).then(data=>data.data);
            if(data.banner){
                let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png?size=4096";
                url = `htpps://discordapp.com/banners/${user.id}/${data.banner}${url}`;
                message.channel.send(`Banner of ${user.tag}**:\n>${url}`)
            } else {
                message.channel.send(":x: **User has no Banner**")
            }
        }catch(e){
            console.log(e)
        }



    }
}