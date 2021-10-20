module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - 沒有撥放的音樂`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - 你沒有加入任何語音頻道!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - 我無法加入你所在的頻道，請確認我的權限!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} 無法在你所在的國家/地區撥放!跳過中...`);
            break;
        case 'MusicStarting':
            message.channel.send(`正在開始播放音樂...請稍後再試!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
    };
};
