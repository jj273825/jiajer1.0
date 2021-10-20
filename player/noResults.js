module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - 沒有這首破歌! ${query} !`);
};
