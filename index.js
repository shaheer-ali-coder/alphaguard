const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = '7058705851:AAGVzdezgI7fu4GywfZYTBENL1yesgvA_S4';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'To create portal add me to your group and use /setup in @test_alpha_buy_bot.');
});

// Listen for '/echo' command

// Listen for text messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg)
});
