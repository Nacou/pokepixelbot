const Discord = require("discord.js");
const client = new Discord.Client();

const token = "MzE4MTIzODc3MjM2NjA0OTI5.DAwPCA.DOqiSb-07Lx7iDcQBNyUifm1j14";
var prefix = ".";
var mention = "<@318123877236604929>";
var memberCount = client.users.size;
var servercount = client.guilds.size;

client.on("ready", () => {
    var servers = client.guilds.array().map(g => g.name).join(',');
    console.log("--------------------------------------");
    console.log('[!]Connexion en cours... \n[!]Veuillez Patienté! \n[!]Les évenement sont après ! :)  \n[!]Les préfix actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});

client.on('message', message => {
    if (message.content === ("wiki claim")) {
        message.reply('test !');
    } else if (message.content === ("bonjour")) {
        message.reply('bonjour à toi ');
    } else if (message.content === ("bonjour")) {
        message.reply('bonjour à toi ');
    } else if (message.content === "!stats") {
        message.reply('Hello !');
    }
});

client.login(token)
