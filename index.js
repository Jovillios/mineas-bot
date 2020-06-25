const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '!';

bot.on('ready', () => {
    console.log('bot online!');
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'bienvenue');
    if (!channel) return;

    channel.send(`Bienvenue ${member} à Mineapolis! Entre !membre pour obtenir le grade Membre puis jette donc un coup d'oeil sur le règlement.`)
    const embed = new Discord.MessageEmbed()
        .setTitle('Carte de Bienvenue')
        .setColor('0x00ff00')
        .addField('nom du serveur', member.guild.toString())
        .addField('nom', member.user.username)
        .addField('numéro', member.guild.memberCount)
        .setThumbnail(member.user.displayAvatarURL())
    channel.send(embed);

})

bot.on('message', message => {
    if (message.content[0] != prefix) return;
    
    args = message.content.slice(prefix.length).split(' ');
    
    switch (args[0])
    {
        case 'ping' :
            message.channel.send('pong!');
            break;

        case 'membre' :

            let role = message.guild.roles.cache.find(role => role.name === 'Membre')
            if(role) {
            if(!message.member.roles.cache.has(role.id))
            {
                message.member.roles.add(role).catch(err => console.log(err)).then( () => {
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Nouveau Membre!')
                    .setColor('0x3598db')
                    .setDescription('🎉 Félicitations! 🎊')
                    .addField('nom',message.author.username)
                    .addField('grade', 'Membre')
                    .setThumbnail(message.author.displayAvatarURL())
                    message.channel.send(embed);
                    
                } )
            }
            }
            break;
    }

})

bot.login(process.env.BOT_TOKEN);
