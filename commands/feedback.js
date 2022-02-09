const Discord = require('discord.js')
var feedbackChannel
try {
    feedbackChannel = require('../config/config.json').feedbackChannel
} catch {
    feedbackChannel = process.env.FEEDBACKCHANNEL
}
module.exports = {
    commands: ['suggest', 'feedback'],
    enabled: false,
    minArgs: 1,
    callback: (message, args, text, client) => {
        if(!feedbackChannel) return

        const feedback = args.join(' ')
        
        const avatarURL = message.author.avatarURL()
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`Feedback from ${message.author.tag} (${message.author.id})`)
        .setThumbnail(avatarURL)
        .setDescription(feedback)
        client.guilds.fetch('739521173116682281').channels.fetch(feedbackChannel).send({embeds: [embed]})
    }   
}