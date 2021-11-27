const TelegramBot = require('node-telegram-bot-api');
const token = '2102216686:AAF4Y3hwMGcBoAARfvhNscI7Fh_Gg0O3vLE';
const bot = new TelegramBot(token, { polling: true });
const start = () => {
    bot.on("message", async (message) => {
        const { chat, message_id } = message;
        const chatId = message.chat.id;
        const name = message.from.first_name;
        const text = message.text;
        const lastname = message.from.last_name;
        const id = message.from.id;
        const username = message.from.username;
        if (text == "/info" || text == "/info@beta_tests_bot") {
            bot.getUserProfilePhotos(id, 0, 1).then(function (data) {
                bot.sendPhoto(
                    chatId,
                    data.photos[0][0].file_id,
                    {
                        caption: `Ваше имя : ${name}\nВаше фамилия : ${lastname}\nВаш ID : ${id}\n Ваш user : @${username}\n`,
                        // Прошёл тест  : ${count} раза\n Ваш уровен Англ. яз : ${lvl}
                    },
                    {
                        reply_to_message_id: message_id,
                    }
                );
            });
        }
        else if (
            text == "/start" ||
            text == "start" ||
            text == "начать" ||
            text == "/start@Your_diary_Robot"
        ) {
            bot.deleteMessage(chatId, message_id);
            bot.sendMessage(
                chatId,
                `Здравствуйте <b>${name}</b>. Вы готовы к тесту?`,
                {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: `Да, готовь.`,
                                    callback_data: `Да, готовь.`,
                                },
                            ],
                            [
                                {
                                    text: `Нет, не готовь.`,
                                    callback_data: `Нет, не готовь.`,
                                },
                            ],
                        ],
                    },
                }
            );
        }
    }
    )
}
start();