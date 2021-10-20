module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - 目前播放 ${track.title} 在 ${message.member.voice.channel.name} ...`);
};