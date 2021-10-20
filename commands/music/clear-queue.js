module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 你需要先加入頻道!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 你需要加入同一個頻道 !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 目前沒有正在撥放的音樂!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - 只剩一首歌在待播歌單.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - 歌單已清空 **removed** !`);
    },
};