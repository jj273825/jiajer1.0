module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} 已加入到歌單 (**${playlist.tracks.length}** 首) !`);
};