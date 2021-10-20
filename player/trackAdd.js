module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.music} - ${track.title} 已加入到歌單!`);
};