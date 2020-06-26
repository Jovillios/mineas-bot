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
        .setThumbnail(member.user.displayAvatarURL())
    channel.send(embed);

})

bot.on('messageReactionAdd', function(messageReaction,user) {

    let member = user.presence.member;
    const mem = member.guild.roles.cache.find(role => role.name === 'Membre');
    const agri = member.guild.roles.cache.find(role => role.name ==='🌾Agriculteur');
    const expl = member.guild.roles.cache.find(role => role.name ==='🏹Explorateur');
    const meca = member.guild.roles.cache.find(role => role.name ==='🔧Mécanicien');
    const mine = member.guild.roles.cache.find(role => role.name ==='💎Mineur');
    const channel = member.guild.channels.cache.find(ch => ch.name === 'rôle');
    const spe = member.roles.cache.has(agri.id) || member.roles.cache.has(expl) || member.roles.cache.has(meca) || member.roles.cache.has(mine);

    if (messageReaction.emoji.identifier=='%E2%9C%85')
    {
        if(!mem) return;
        if(member.roles.cache.has(mem.id)) return;
    member.roles.add(mem).then( () => {
            if(!channel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle('Nouveau Membre!')
                .setColor('0x3598db')
                .setDescription('🎉 Félicitations! 🎊')
                .addField('nom',user.username)
                .addField('grade', 'Membre')
                .setThumbnail(user.displayAvatarURL())
            channel.send(`Hey ${member}, j'ai une bonne nouvelle pour toi!`);
            channel.send(embed);
        })
    }

    if(messageReaction.emoji.identifier=='%F0%9F%8C%BE')
    {
        if(!agri) return;
        if(spe) return;
        member.roles.add(agri).then( () => {
            let channel = member.guild.channels.cache.find(ch => ch.name === 'rôle');
            if(!channel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle('Nouveau Agriculteur!')
                .setDescription('🎉 Félicitations! 🎊')
                .setColor('0x66ff33')
                .addField('nom',user.username)
                .addField('grade','Agriculteur')
                .setThumbnail(user.displayAvatarURL())
            channel.send(`Hey ${member}, ton choix est irrévocable!`);
            channel.send(embed);
        })
    }

    if(messageReaction.emoji.identifier=='%F0%9F%8F%B9')
    {
        if(!expl) return;
        if(spe) return;
        member.roles.add(expl).then( () => {
            let channel = member.guild.channels.cache.find(ch => ch.name === 'rôle');
            if(!channel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle('Nouveaux Explorateur!')
                .setDescription('🎉 Félicitations! 🎊')
                .setColor('0xffff00')
                .addField('nom',user.username)
                .addField('grade','Explorateur')
                .setThumbnail(user.displayAvatarURL())
            channel.send(`Hey ${member}, ton choix est irrévocable!`);
            channel.send(embed);
        })
    }

    if(messageReaction.emoji.identifier=='%F0%9F%94%A7')
    {
        if(!meca) return;
        if(spe) return;
        member.roles.add(meca).then( () => {
            let channel = member.guild.channels.cache.find(ch => ch.name === 'rôle');
            if(!channel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle('Nouveaux Mécanicien!')
                .setDescription('🎉 Félicitations! 🎊')
                .setColor('0xff0000')
                .addField('nom',user.username)
                .addField('grade','Mécanicien')
                .setThumbnail(user.displayAvatarURL())
            channel.send(`Hey ${member}, ton choix est irrévocable!`);
            channel.send(embed);
        })
    }

    if(messageReaction.emoji.identifier=='%F0%9F%92%8E')
    {
        if(!mine) return;
        if(spe) return;
        member.roles.add(mine).then( () => {
            let channel = member.guild.channels.cache.find(ch => ch.name === 'rôle');
            if(!channel) return;
            const embed = new Discord.MessageEmbed()
                .setTitle('Nouveaux Mineur!')
                .setDescription('🎉 Félicitations! 🎊')
                .setColor('0x0099ff')
                .addField('nom',user.username)
                .addField('grade','Mineur')
                .setThumbnail(user.displayAvatarURL())
            channel.send(`Hey ${member}, ton choix est irrévocable!`);
            channel.send(embed);
        })
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
