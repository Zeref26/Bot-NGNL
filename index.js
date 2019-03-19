let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
    bot.user.setActivity("« Dess »");
});

bot.on('message', message => {
    let serv = bot.guilds.find('id', "505007497770434600");
    let member = serv.members.find('id', message.author.id);
    if (message.content.startsWith('>shoot_n') && member.roles.exists('name', "Exceed")) {
        const args = message.content.slice(1).trim().split(/ +/g);
        message.delete();
        let lanc = message.guild.members.find('id', message.author.id);
        if (message.mentions.members.size>=1 && args.length>1) {
            let trouve = 0;
            let adv = message.mentions.members.first();
            bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages => {
                messages.forEach((msg) => {
                    let lp = "";
                    if (msg.content.includes(lanc.displayName)) {
                        trouve = 1;
                        let m = ""+msg.content;
                        let l = m.length;
                        for (let i = 0; i<l; i++) {
                            if (m.charAt(i)==':') {
                                for (let j = i+2; j<l; j++) {
                                    lp += m.charAt(j);
                                }                                
                            }
                        }
                        if (parseInt(lp)>0) {
                            let tir = Math.floor(Math.random() * (100)+1);
                            if (tir>=50) {
                                let esq = Math.floor(Math.random() * (100)+1);
                                if (esq < 50) {
                                    message.channel.send(lanc.displayName+" réussit son tir.");
                                } else {
                                    message.channel.send(adv.displayName+" évite le tir de "+lanc.displayName);
                                }
                            } else {
                                message.channel.send(lanc.displayName+" a raté son tir.");
                            }
                            new_m = lanc.displayName+" : "+(parseInt(lp)-1);
                            msg.edit(new_m);
                        } else {
                            message.channel.send("Vous n'avez pas assez de LP.");
                        }
                    }
                });
                if (trouve == 0) {
                    let tir = Math.floor(Math.random() * (100)+1);
                    if (tir>=50) {
                        let esq = Math.floor(Math.random() * (100)+1);
                        if (esq < 50) {
                            message.channel.send(lanc.displayName+" réussit son tir.");
                        } else {
                            message.channel.send(adv.displayName+" évite le tir de "+lanc.displayName);
                        }
                    } else {
                        message.channel.send(lanc.displayName+" a raté son tir.");
                    }
                    new_m = lanc.displayName+" : 9";
                    bot.channels.find('id',"555145541659525123").send(new_m);
                }
            });
        } else if (args.length>1) {
            if (args[1].toLowerCase()=="ia") {
                let trouve = 0;
                bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages => {
                    messages.forEach((msg) => {
                        let lp = "";
                        if (msg.content.includes(lanc.displayName)) {
                            trouve = 1;
                            let m = ""+msg.content;
                            let l = m.length;
                            for (let i = 0; i<l; i++) {
                                if (m.charAt(i)==':') {
                                    for (let j = i+2; j<l; j++) {
                                        lp += m.charAt(j);
                                    }                                
                                }
                            }
                            msg.edit(lanc.displayName+" : "+(parseInt(lp)+2));
                        }
                    });
                    if (trouve == 0) {
                        bot.channels.find('id',"555145541659525123").send(lanc.displayName+" : 12");
                    }
                });
            } else {
                message.channel.send("Vous devez indiquer une personne.");
            }
        } else {
            message.channel.send("Vous devez indiquer une personne.");
        }
    }
    if (message.content.startsWith('>shoot_r') && member.roles.exists('name', "Exceed")) {
        const args = message.content.slice(1).trim().split(/ +/g);
        message.delete();
        let lanc = message.guild.members.find('id', message.author.id);
        if (message.mentions.members.size>=1 && args.length>1) {
            let trouve = 0;
            let adv = message.mentions.members.first();
            bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages => {
                messages.forEach((msg) => {
                    let lp = "";
                    if (msg.content.includes(lanc.displayName)) {
                        trouve = 1;
                        let m = ""+msg.content;
                        let l = m.length;
                        for (let i = 0; i<l; i++) {
                            if (m.charAt(i)==':') {
                                for (let j = i+2; j<l; j++) {
                                    lp += m.charAt(j);
                                }                                
                            }
                        }
                        if (parseInt(lp)>0) {
                            let tir = Math.floor(Math.random() * (100)+1);
                            if (tir>=66) {
                                let esq = Math.floor(Math.random() * (100)+1);
                                if (esq < 75) {
                                    message.channel.send(lanc.displayName+" réussit son tir rebondissant.");
                                } else {
                                    message.channel.send(adv.displayName+" évite le tir rebondissant de "+lanc.displayName+" !");
                                }
                            } else {
                                message.channel.send(lanc.displayName+" a raté son tir.");
                            }
                            new_m = lanc.displayName+" : "+(parseInt(lp)-1);
                            msg.edit(new_m);
                        } else {
                            message.channel.send("Vous n'avez pas assez de LP.");
                        }
                    }
                });
                if (trouve == 0) {
                    let tir = Math.floor(Math.random() * (100)+1);
                    if (tir>=66) {
                        let esq = Math.floor(Math.random() * (100)+1);
                        if (esq < 75) {
                            message.channel.send(lanc.displayName+" réussit son tir rebondissant.");
                        } else {
                            message.channel.send(adv.displayName+" évite le tir rebondissant de "+lanc.displayName+" !");
                        }
                    } else {
                        message.channel.send(lanc.displayName+" a raté son tir.");
                    }
                    new_m = lanc.displayName+" : 9";
                    bot.channels.find('id',"555145541659525123").send(new_m);
                }
            });
        } else {
            message.channel.send("Vous devez indiquer une personne.");
        }
    }
    if (message.content.startsWith('>shoot_IA') && member.roles.exists('name', "Exceed")) {
        message.delete();
        let lanc = message.guild.members.find('id', message.author.id);
        let trouve = 0;
        bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages => {
            messages.forEach((msg) => {
                let lp = "";
                if (msg.content.includes(lanc.displayName)) {
                    trouve = 1;
                    let m = ""+msg.content;
                    let l = m.length;
                    for (let i = 0; i<l; i++) {
                        if (m.charAt(i)==':') {
                            for (let j = i+2; j<l; j++) {
                                lp += m.charAt(j);
                            }                                
                        }
                    }
                    msg.edit(lanc.displayName+" : "+(parseInt(lp)+2));
                }
            });
            if (trouve == 0) {
                bot.channels.find('id',"555145541659525123").send(lanc.displayName+" : 12");
            }
            message.channel.send("Vous regagnez 2 LP.")
        });
    }
    if (message.content.startsWith('>end')) {
        let trouve = 0;
        message.delete();
        let lanc = message.guild.members.find('id', message.author.id);
        bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages => {
            messages.forEach((msg) => {
                let lp = "";
                if (msg.content.includes(lanc.displayName)) {
                    trouve = 1;
                    msg.delete();
                    message.channel.send("Votre partie s'est finie.");
                }
            });
            if (trouve == 0) {
                message.channel.send("Vous n'étiez pas en partie.");
            }
        });
    }
    if (message.content.startsWith('>illusion') && member.roles.exists('name', "Dhampire")) {
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
    if (message.content.startsWith('>help')) {
        let lanc = message.guild.members.find('id', message.author.id);
        message.channel.send("La liste des commandes vous a été envoyée en privé.");
        lanc.send("Voici la liste des commandes : \n\n **- >shoot_n @membre** Execute une tentative de tir sur @membre. Consomme 1 LP. \n **- >shoot_r @membre** Execute une tentative de tir rebondissant sur @membre. Consomme 1 LP. \n **- >shoot_IA** Vous tirez sur une IA. Vous regagnez 2 LP. \n **- >illusion @membre** Effectue une tentative pour faire rentrer @membre dans votre illusion. Uniquement les dhampires. \n **- >end** Finit votre partie.");
    }
});

bot.login(process.env.TOKEN);
