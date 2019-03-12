let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on('message', message => {
    if (message.content.startsWith('!shoot')) {
        message.delete();
        let adv = message.mentions.members.first();
        let lanc = message.guild.members.find('id', message.author.id);
        if (message.mentions.members.size>=1) {
            bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages => {
                messages.forEach((msg) => {
                    let lp = "";
                    if (msg.content.includes(lanc.displayName)) {
                        let m = ""+msg.content;
                        let l = m.length;
                        for (let i = 0; i<l; i++) {
                            if (m.charAt(i)==':') {
                                for (let j = i+2; j<l; j++) {
                                    lp += m.charAt(j);
                                }                                
                            }
                        }
                    }
                    if (parseInt(lp)>0) {
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
                            message.channel.send(lanc.displayName+" a raté son tir.");
                        }
                    } else {
                        message.channel.send("Vous n'avez pas assez de LP.");
                    }
                });
            });
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
    if (message.content.toLowerCase()=="shiro") {
        message.channel.send("C'est la best !");
    }
    if (message.content.startsWith('!say')) {
        const args = message.content.slice(1).trim().split(/ +/g);
        message.channel.send(args.slice(1).join(" "));
    }
});

bot.login(process.env.TOKEN);