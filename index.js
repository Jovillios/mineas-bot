const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '!';

bot.on('ready', () => {
    console.log('bot online!');
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenue');
    if (!channel) return;

    channel.send(`Bienvenue ${member} à Mineapolis! Deviens membre en approuvant le règlement.`)
    const embed = new Discord.MessageEmbed()
        .setTitle('Carte de Bienvenue')
        .setColor('0x00ff00')
        .addField('nom du serveur', member.guild.toString())
        .addField('nom', member.user.username)
        .addField('numéro', member.guild.memberCount)
        .setThumbnail(member.guild.iconURL)
    channel.send(embed);

})

bot.on('messageReactionAdd', function(messageReaction,user) {
    if (messageReaction.emoji.identifier='%E2%9C%85')
    {
        let member = user.presence.member;
        let role = member.guild.roles.cache.find(role => role.name === 'Membre')
        if(role) {
            if(!member.roles.cache.has(role.id))
            {
                member.roles.add(role).catch(err => console.log(err)).then( () => {
                    let channel = member.guild.channels.cache.find(ch => ch.name === 'role')
                    if (channel) {
                        const embed = new Discord.MessageEmbed()
                            .setTitle('Nouveau Membre!')
                            .setColor('0x3598db')
                            .setDescription('🎉 Félicitations! 🎊')
                            .addField('nom',user.username)
                            .addField('grade', 'Membre')
                            .setThumbnail(user.displayAvatarURL())
                        channel.send(`Hey ${member}, j'ai une bonne nouvelle pour toi!`);
                        channel.send(embed);
                    }
                    
                } )
            }
        }
    }
    //console.log(messageReaction.emoji.identifier);
} )

bot.on('message', message => {
    if (message.content[0] != prefix) return;
    
    args = message.content.slice(prefix.length).split(' ');
    
    switch (args[0])
    {
        case 'ping' :
            message.channel.send('pong!');
            break;

        case 'ip' :
            message.channel.send('bientôt disponible!');
            break;
    }

})


bot.login(process.env.BOT_TOKEN);
