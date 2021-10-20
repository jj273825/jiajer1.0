module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - 你需要先加入頻道!  `);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - 需要加入同一個頻道 `);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - 目前沒有正在撥放的音樂!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - 請指定一個有效的篩選選項開啟或關閉!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - 這個篩選不存在， 試試看這些範例 (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - 我**正在加入** 篩選至音樂，請等待... 注意 : 音樂越長，需要的時間就越長.`);
        else message.channel.send(`${client.emotes.music} - 我**正在取消** 篩選至音樂，請等待... 注意 : 音樂越長，需要的時間就越長.`);
    },
};