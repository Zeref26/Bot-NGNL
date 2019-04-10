let Discord = require('discord.js');
let bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot is ready !');
});

bot.on('guildMemberAdd', (member) => {
    if (member.guilds.exists('id', "505007497770434600")) {
        bot.guilds.finf('id', "505007497770434600").channels.find('id', "505007497770434602").send(member+"Bienvenue dans notre humble demeure, dess. Si tu as envie de connaitre la suite l'animé en light novel, alors je te renvoie vers le lien épinglé dans #『annonces』, dess.");
    }
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
                                    let num = Math.floor(Math.random() * 3 + 1);
                                    switch (num) {
                                        case 1 : message.channel.send(lanc.displayName+" réussit son tir sur "+adv.displayName+".");
                                            break;
                                        case 2 : message.channel.send(lanc.displayName+" exécute un magnifique tir sur "+adv.displayName+".");
                                            break;
                                        case 3 : message.channel.send("Le tir de "+lanc.displayName+" semble avoir touché "+adv.displayName+".");
                                            break;
                                    }
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
                            let num = Math.floor(Math.random() * 3 + 1);
                            switch (num) {
                                case 1 : message.channel.send(lanc.displayName+" réussit son tir sur "+adv.displayName+".");
                                    break;
                                case 2 : message.channel.send(lanc.displayName+" exécute un magnifique tir sur "+adv.displayName+".");
                                    break;
                                case 3 : message.channel.send("Le tir de "+lanc.displayName+" semble avoir touché "+adv.displayName+".");
                                    break;
                            }
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
                            if (tir>=75) {
                                let esq = Math.floor(Math.random() * (100)+1);
                                if (esq < 75) {
                                    let num = Math.floor(Math.random() * 3 + 1);
                                    switch (num) {
                                        case 1 : message.channel.send(lanc.displayName+" réussit son tir rebondissant sur "+adv.displayName+".");
                                            break;
                                        case 2 : message.channel.send(lanc.displayName+" exécute un magnifique tir rebondissant sur "+adv.displayName+".");
                                            break;
                                        case 3 : message.channel.send("Le tir rebondissant de "+lanc.displayName+" semble avoir touché "+adv.displayName+".");
                                            break;
                                    }
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
                    if (tir>=75) {
                        let esq = Math.floor(Math.random() * (100)+1);
                        if (esq < 75) {
                            let num = Math.floor(Math.random() * 3 + 1);
                            switch (num) {
                                case 1 : message.channel.send(lanc.displayName+" réussit son tir rebondissant sur "+adv.displayName+".");
                                    break;
                                case 2 : message.channel.send(lanc.displayName+" exécute un magnifique tir rebondissant sur "+adv.displayName+".");
                                    break;
                                case 3 : message.channel.send("Le tir rebondissant de "+lanc.displayName+" semble avoir touché "+adv.displayName+".");
                                    break;
                            }
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
            message.channel.send(lanc.displayName+" a tiré sur une IA. Il regagne 2 LP.")
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
        lanc.send("Voici la liste des commandes : \n\n **- >shoot_n @membre** Execute une tentative de tir sur @membre. Consomme 1 LP. \n **- >shoot_r @membre** Execute une tentative de tir rebondissant sur @membre. Consomme 1 LP. \n **- >shoot_IA** Vous tirez sur une IA. Vous regagnez 2 LP.\n **- >shoot_f @membre** Vous tirez sur un allié. Vous perdez 1 LP et votre allié en gagne 1. \n **- >illusion @membre** Effectue une tentative pour faire rentrer @membre dans votre illusion. Uniquement les dhampires. \n **- >end** Finit votre partie.\n **- >dess** SURPRIIIISE !!!");
    }
    if (message.content.startsWith('>dess')) {
        message.delete();
        let num = Math.floor(Math.random()*25 + 1);
        switch (num) {
            case 1 : message.channel.send("Tu fais quoi là à me caresser, dess ? Mais continue crétin, dess.");
                break;
            case 2 : message.channel.send("Espèce de singe imberbe, caresse moi, dess.");
                break;
            case 3 : message.channel.send("J’ai faim, donne moi encore à manger, dess.");
                break;
            case 4 : message.channel.send("Je suis fatiguée. Laisse moi dormir, dess.");
                break;
            case 5 : message.channel.send("Pourquoi es tu aussi idiot, dess ?");
                break;
            case 6 : message.channel.send("Mon grand père peut t’arracher la moelle épinière, dess.");
                break;
            case 7 : message.channel.send("Tu m’as pourtant dit qu’on allait jouer ensemble, dess.");
                break;
            case 8 : message.channel.send("**ronronnement**");
                break;
            case 9 : message.channel.send("Tu es très con, mais tu sais bien caresser, je t’autorise à respirer le même air que moi, dess.");
                break;
            case 10 : message.channel.send("Je suis une fennec, pas un chat. Et le premier qui me prend pour son chien, je le bute, dess.");
                break;
            case 11 : message.channel.send("C’est quand qu’on joue, dess ?");
                break ;
            case 12 : message.channel.send("Pourquoi je dis dess, dess ? Parce que, espèce de mouche à merde, dess.");
                break ;
            case 13 : message.channel.send("Mmm, les cookies c’est kroo bonn, donne m’en encore esclave, dess. ");
                break ;
            case 14 : message.channel.send("Dess **lève les bras toute contente.**");
                break ;
            case 15 : message.channel.send("Tu cuisines bien, je t’aime bien, dess.");
                break ;                            
            case 16 : message.channel.send("Je peux manger ce poisson là bas, dess ? Quoi ? Une seirène, dess ? **Grimace de dégoût.**");
                break ;
            case 17 : message.channel.send("Regarde, regarde, dess. Un pigeon, dess. **Dit elle en pointant du doigt une Flügel.**");
                break ;
            case 18 : message.channel.send("Les dhampires aiment bien sucer, dess, du sang, dess.");
                break ;
            case 19 : message.channel.send("Comment font ces vegans d’elfes pour avoir des gros lolos, dess ? ");
                break ;
            case 20 : message.channel.send("Quel est le chemin le plus court pour atteindre le cœur, dess ? Quelle question idiote, dess. Écoute moi bien ex-machina, dess. Le meilleur moyen d’atteindre le cœur d’une personne c’est en broyant sa cage thoracique, dess.");
                break ;
            case 21 : message.channel.send("Je suis ambassadrice et mineure, si tu penses pouvoir m’impressionner tu peux te le mettre dans le cul, dess.");
                break ;
            case 22 : message.channel.send("(Izuna version internationale) You are bitch, please.");
                break ;
            case 23 : message.channel.send("**Mange un cookie.**");
                break ;
            case 24 : message.channel.send("**Dort avec dans ses bras une pancarte disant :** « Le premier qui me réveille, je lui arrache sa rate pour le bien de tous. »");
                break ;
            case 25 : message.channel.send("BAKA BAKA BAKA, dess !");
                break ;
        }
    }
    if (message.content.startsWith('>shoot_f')) {
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
                        let trouve2 = 0;
                        bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages2 => {
                            messages2.forEach((msg2) => {
                                let lp2 = "";
                                if (msg.content.includes(adv.displayName)) {
                                    trouve2 = 1;
                                    let m2 = ""+msg.content;
                                    let l2 = m.length;
                                    for (let i2 = 0; i2<l2; i2++) {
                                        if (m2.charAt(i2)==':') {
                                            for (let j2 = i2+2; j2<l2; j2++) {
                                                lp2 += m2.charAt(j2);
                                            }                                
                                        }
                                    }
                                    msg.edit(lanc.displayName+" : "+(parseInt(lp)-1));
                                    msg2.edit(adv.displayName+" : "+(parseInt(lp)+1));
                                    message.channel.send(lanc.displayName+" a tiré sur son allié "+adv.displayName+".\n"+lanc.displayName+"perd 1 LP et "+adv.displayName+" en gagne 1.");
                                }
                            });
                        });
                        if (trouve2==0) {
                            msg.edit(lanc.displayName+" : "+(parseInt(lp)-1));
                            bot.channels.find('id',"555145541659525123").send(adv.displayName+" : 11");
                            message.channel.send(lanc.displayName+" a tiré sur son allié "+adv.displayName+".\n"+lanc.displayName+"perd 1 LP et "+adv.displayName+" en gagne 1.");
                        }
                    }
                });
            });
            if (trouve==0) {
                let trouve2 = 0;
                bot.channels.get("555145541659525123").fetchMessages({limit:99}).then(messages2 => {
                    messages2.forEach((msg2) => {
                        let lp2 = "";
                        if (msg.content.includes(adv.displayName)) {
                            trouve2 = 1;
                            let m2 = ""+msg.content;
                            let l2 = m.length;
                            for (let i2 = 0; i2<l2; i2++) {
                                if (m2.charAt(i2)==':') {
                                    for (let j2 = i2+2; j2<l2; j2++) {
                                        lp2 += m2.charAt(j2);
                                    }                                
                                }
                            }
                            bot.channels.find('id',"555145541659525123").send(lanc.displayName+" : 9");
                            msg2.edit(adv.displayName+" : "+(parseInt(lp)+1));
                            message.channel.send(lanc.displayName+" a tiré sur son allié "+adv.displayName+".\n"+lanc.displayName+"perd 1 LP et "+adv.displayName+" en gagne 1.");
                        }
                    });
                });
                if (trouve2==0) {
                    bot.channels.find('id',"555145541659525123").send(lanc.displayName+" : 9");
                    bot.channels.find('id',"555145541659525123").send(adv.displayName+" : 11");
                    message.channel.send(lanc.displayName+" a tiré sur son allié "+adv.displayName+".\n"+lanc.displayName+"perd 1 LP et "+adv.displayName+" en gagne 1.");
                }
            }
        } else {
            message.channel.send("Vous devez indiquer une personne.");
        }
    }
    if (message.content.startsWith(">say")) {
        if(message.guild.members.find('id',message.author.id).roles.exists('name',"admin")) {
            message.delete();
            const args = message.content.slice(1).trim().split(/ +/g);
            if (args.length>=2) {
                message.channel.send(args.slice(1).join(" "));
            } else {
                message.channel.send("Vous n'avez pas mis le texte à dire.");
            }
        }
    }
});

bot.login(process.env.TOKEN);
