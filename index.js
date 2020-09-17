const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === `${prefix}ping`) {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  if (message.content === `${prefix}embed`){
    const embed = new Discord.MessageEmbed()
    // Set the title of the field
    .setTitle('A slick little embed')
    // Set the color of the embed
    .setColor('GREEN')
    // Set the main content of the embed
    .setDescription('Hello, this is a slick embed!');
  // Send the embed to the same channel as the message
  message.channel.send(embed);
  } //using message.reply pings the user
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login('your token here');


/*
from https://discord.js.org/#/docs/main/stable/examples/ping - modifyed some things

args work like
!command [args0] [args1] [args2] ect...
*/