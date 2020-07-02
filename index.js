const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '!';

bot.on('ready', () => {
    console.log('bot online!');

    let guild = bot.guilds.cache.find(guild => guild.id === '725247291954561105')
    let channel = guild.channels.cache.find(ch => ch.id === '725691188925038612')

    const embed = new Discord.MessageEmbed()
        .setTitle('Choisis ta faction!')
        .addField('Agriculture','🌾')
        .addField('Exploration','🏹')
        .addField('Mécanique','🔧')
        .addField('Ressources','💎')

    channel.bulkDelete(1);
    channel.send(embed).then(msg => {
        msg.react('🌾')
        msg.react('🏹')
        msg.react('🔧')
        msg.react('💎')
    })

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

    if(user.bot) return;
    let member = user.presence.member;
    const agri = member.guild.roles.cache.find(role => role.id ==='725688658098651256');
    const expl = member.guild.roles.cache.find(role => role.id ==='725689042020073533');
    const meca = member.guild.roles.cache.find(role => role.id ==='725689047451959407');
    const mine = member.guild.roles.cache.find(role => role.id ==='727810710909878353');
    const spe = member.roles.cache.has(agri.id) || member.roles.cache.has(expl) || member.roles.cache.has(meca) || member.roles.cache.has(mine);


    if(messageReaction.emoji.identifier=='%F0%9F%8C%BE')
    {
        if(!agri) return;
        if(spe) return;
        member.roles.add(agri)
    }

    if(messageReaction.emoji.identifier=='%F0%9F%8F%B9')
    {
        if(!expl) return;
        if(spe) return;
        member.roles.add(expl)
    }

    if(messageReaction.emoji.identifier=='%F0%9F%94%A7')
    {
        if(!meca) return;
        if(spe) return;
        member.roles.add(meca)
    }

    if(messageReaction.emoji.identifier=='%F0%9F%92%8E')
    {
        if(!mine) return;
        if(spe) return;
        member.roles.add(mine)
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

        case 'craft':
            item = args[1].toLowerCase()
            message.channel.send({files : ['item/' + item + '/craft.png']}).catch( () => {
                message.channel.send('Item non trouvé!')
            })
            break;
    }

})


bot.on('guildMemberUpdate', (old_member, new_member) => {
    let old_roles = old_member.roles.cache.array().map(role => role.name);
    let new_roles = new_member.roles.cache.array().map(role => role.name);
    

    let minus = old_roles.filter(role => !new_roles.includes(role))
    let plus = new_roles.filter(role => !old_roles.includes(role))

    let role_channel = new_member.guild.channels.cache.find(ch => ch.id === '725652819914260601');
    
    for(let i = 0; i<minus.length;i++) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Ancien ${minus[i]}`)
            .setColor('0xff0000')
            .addField('Membre',new_member.user.username)
            .addField('Ancien Rôle',minus[i])
            .setThumbnail(new_member.user.displayAvatarURL())

        role_channel.send(embed);
    }

    for(let i = 0; i<plus.length;i++) {
        const embed = new Discord.MessageEmbed()
            .setTitle(`Nouveau ${plus[i]}!`)
            .setDescription('🎉 Félicitations! 🎊')
            .setColor('0x00ff00')
            .addField('Membre',new_member.user.username)
            .addField('Nouveau Rôle',plus[i])
            .setThumbnail(new_member.user.displayAvatarURL())

        role_channel.send(embed);
    }
})


bot.login(process.env.BOT_TOKEN);
