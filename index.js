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
            message.channel.send("1");
            bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(message => {
                message.channel.send("2");
                message.forEach((msg) => {
                    message.channel.send("3");
                    let lp = "";
                    if (msg.content.includes(lanc.displayName)) {
                        message.channel.send("4");
                        let m = ""+msg.content;
                        let l = m.length-4;
                        for (let i = 4; i<l; i++) {
                            if (m.charAt(i)==':') {
                                for (let j = i+2; j<l-7; j++) {
                                    lp += m.charAt(j);
                                }                                
                            }
                        }
                    } else {
                        message.channel.send("5");
                        lp = "10";
                        bot.channels.find('id', "555145541659525123").send(lanc.displayName+" : 9");
                    }
                    if (lp>0) {
                        message.channel.send("6");
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
                        message.channel.send("7");
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
});

bot.login(process.env.TOKEN);