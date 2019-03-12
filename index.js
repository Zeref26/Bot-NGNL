let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on('message', message => {
    if (message.content.startsWith('!shoot')) {
        message.delete();
        if (message.mentions.members.size>=1) {
            let adv = message.mentions.members.first();
            let lanc = message.guild.members.find('id', message.author.id);
            let tir = Math.floor(Math.random() * (100)+1);
            if (tir>=70 && tir<90) {
                let esq = Math.floor(Math.random() * (100)+1);
                if (esq < 50) {
                    message.channel.send(lanc.displayName+" réussit son tir.");
                } else {
                    message.channel.send(adv.displayName+" évite le tir de "+lanc.displayName);
                }
            } else if (tir>=90) {
                let esq = Math.floor(Math.random() * (100)+1);
                if (esq < 80) {
                    message.channel.send(lanc.displayName+" réussit son tir rebondissant.");
                } else {
                    message.channel.send(adv.displayName+" évite le tir rebondissant de "+lanc.displayName+" !");
                }
            } else {
                message.channel.send("Flemme");
            }
            message.channel.send(tir+" = tir");
        } else {
            message.channel.send("Vous devez indiquer une personne.");
        }
    }
    if (message.content.startsWith('!illusion')) {
        message.delete();
        if (message.mentions.members.size>=1) {
            let mem = message.mentions.members.first();
            let a = 0;
            let b = 0;
            while (a==b) {
                a = Math.floor(Math.random() * (100)+1);
                b = Math.floor(Math.random() * (100)+1);
                if (a<b) {
                    message.channel.send(mem.displayName+" résiste à l'illusion.");
                } else if (a>b) {
                    message.channel.send(mem.displayName+" entre dans l'illusion.");
                }
            }
        } else {
            message.channel.send("Vous devez indiquer une personne.");
        }
    }
});

bot.login(process.env.TOKEN);