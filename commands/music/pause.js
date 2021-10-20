module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 你需要先加入頻道!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 需要加入同一個頻道 !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 目前沒有正在撥放的音樂!`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - 已暫停 !`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - 歌曲 ${client.player.getQueue(message).playing.title} 暫停 !`);
    },
};