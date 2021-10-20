module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 你需要先加入頻道!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 需要加入同一個頻道 !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 目前沒有正在撥放的音樂!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: '嘉澤音樂Bot' },
                fields: [
                    { name: '頻道', value: track.author, inline: true },
                    { name: '指令使用者', value: track.requestedBy.username, inline: true },
                    { name: '來自歌單', value: track.fromPlaylist ? '是' : '否', inline: true },

                    { name: '觀看數', value: track.views, inline: true },
                    { name: 'Duration', value: track.duration, inline: true },
                    { name: '是否開起篩選', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: '音量', value: client.player.getQueue(message).volume, inline: true },
                    { name: '重複撥放', value: client.player.getQueue(message).repeatMode ? '開啟' : '未開啟', inline: true },
                    { name: '撥放狀態', value: client.player.getQueue(message).paused ? '暫停中' : '撥放中', inline: true },

                    { name: '進度條', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};
