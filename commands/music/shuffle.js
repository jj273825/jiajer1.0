module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 你需要先加入頻道!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 你需要先加入頻道!!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 目前沒有正在撥放的音樂!`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - 歌單已隨機播放 **${client.player.getQueue(message).tracks.length}** 首歌 !`);
    },
};