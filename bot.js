const Discord = require("discord.js");



const PREFIX = "!"
var fortunes = [
    "Yes",
    "No bitch",
    "Possibly",
    "Most likely"
];
var bot = new Discord.Client();

bot.on("ready", function() { 
console.log("Ready")


});

bot.on("guildMemberAdd", function(member) {
member.build.channels.find("name", "general").sendMessage(member.toString + " welcome to EL3CTRIC enjoy your stay!")

});

bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;

if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
case "ping":
message.channel.sendMessage("Shut the fuck up" );
break;
case "info":
var embed = new Discord.RichEmbed()
.setTitle("Info")
.setDescription("EL3CTRIC is a LUA C executor with a built in hub full of scripts, when you hit the button for each script it will execute it automatically")

message.channel.sendEmbed(embed);
break;


case "fortune":
    if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
    else message.channel.sendMessage("I can't read that fortune.");
    break;
    default:
    message.channel.sendMessage("Invalid Command");


}
});


bot.login(proccess.env.MzU3MjU0NTM2OTk5NzMxMjIx.DLprQA.G3J2jgsE1DqbQYgmqWqbdh_X3BI)
