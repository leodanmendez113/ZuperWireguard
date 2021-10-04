const TelegramBot = require('node-telegram-bot-api');
const config = require('./config.json');


const token = config.telegram.KEY;
//const admin = config.telegram.ADMIN_ID;
const bot = new TelegramBot(token, {polling: true});

bot.on('polling_error', function(error){
    console.log(error);
});

bot.onText(/^\/start/, function(msg){
    
    var chatId = msg.chat.id;
    //var nameUser = msg.from.first_name;
   bot.sendMessage(chatId, 'Hello World')

})