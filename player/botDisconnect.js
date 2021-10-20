module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - 音樂在我離開時停止撥放了!`);
};