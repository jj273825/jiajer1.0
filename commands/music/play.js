module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 你需要先加入頻道!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 需要加入同一個頻道 !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - 請輸入想撥放的音樂`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};