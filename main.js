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
            bot.sendMessage(
                chatId,
                `Привет <b>${name}</b>! 😊



Этот бот поможет определить твой уровень английского языка 🧠. В тесте всего 20 вопросов разной сложности, ты сможешь пройти его за 3-5 минут. 

Во всех вопросах нужно заполнить пропуск. У тебя будет два варианта ответа и возможность пропустить вопрос. 

Это не школьная контрольная, поэтому не бойся отвечать неправильно или пропускать вопросы с помощью кнопки «Я не знаю». Удачи!😇
                
                `,
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
                                    text: `Нет, я не знаю.`,
                                    callback_data: `Нет, я не знаю.`,
                                },
                            ],
                        ],
                    },
                }
            );
        }
    }
    )
    bot.on("callback_query", async (query) => {
        const { chat, message_id, text } = query.message;
        switch (query.data) {
            case "Нет, я не знаю.":
                bot.deleteMessage(chat.id, message_id);
                bot.sendMessage(chat.id, `
                Ты уверень что ты не знаешь ? Может всё таки попробуешь ?`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "Попробовать",
                                    callback_data: "Да, готовь.",
                                },
                            ],
                        ],
                    },
                })
                break
            case "Да, готовь.":
                bot.deleteMessage(chat.id, message_id);
                bot.sendMessage(chat.id, `1. He advised me … the heavy furniture.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "not to lift",
                                    callback_data: "not to lift",
                                },
                            ],
                            [
                                {
                                    text: "isn't lift",
                                    callback_data: "isn't lift",
                                },
                            ],
                            [
                                {
                                    text: "to not lift",
                                    callback_data: "to not lift",
                                },
                            ],
                            [
                                {
                                    text: "Не знаю",
                                    callback_data: "Не знаю",
                                },
                            ]
                        ],
                    },
                });
                break
            case "not to lift" && "isn't lift" && "to not lift":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `2. My brother says he'll never forget … the Niagara Falls for the first time.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "he saw",
                                    callback_data: "not to lift",
                                },
                            ],
                            [
                                {
                                    text: "to see",
                                    callback_data: "isn't lift",
                                },
                            ],
                            [
                                {
                                    text: "seeing",
                                    callback_data: "seeing",
                                },
                            ],
                        ],
                    },
                });
                break
            case "he saw" && "to see" && "seeing":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `3. She says that when she was a child bananas … her least favorite fruit.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "have been",
                                    callback_data: "have been",
                                },
                            ],
                            [
                                {
                                    text: "are",
                                    callback_data: "are",
                                },
                            ],
                            [
                                {
                                    text: "were",
                                    callback_data: "were",
                                },
                            ],
                        ],
                    },
                });
                break
            case "have been" && "are" && "were":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `4. Rita wanted to change her hairstyle, so she … by a professional stylist.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "had cut it",
                                    callback_data: "had cut it",
                                },
                            ],
                            [
                                {
                                    text: "had it cut",
                                    callback_data: "had it cut",
                                },
                            ],
                            [
                                {
                                    text: "have to cut it",
                                    callback_data: "have to cut it",
                                },
                            ],
                        ],
                    },
                });
                break
            case "had cut it" && "had it cut" && "have to cut it":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `5. Mr. Halls reads … than anyone I know.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "faster",
                                    callback_data: "faster",
                                },
                            ],
                            [
                                {
                                    text: "fastly",
                                    callback_data: "fastly",
                                },
                            ],
                            [
                                {
                                    text: "more fast",
                                    callback_data: "more fast",
                                },
                            ],
                        ],
                    },
                });
                break
            case "faster" & "fastly" & "more fast":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `6. Neither my mom … me have ever been to Rome.`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "but",
                                    callback_data: "but",
                                },
                            ],
                            [
                                {
                                    text: "or",
                                    callback_data: "or",
                                },
                            ],
                            [
                                {
                                    text: "nor",
                                    callback_data: "nor",
                                },
                            ],
                        ],
                    },
                });
                break
            case "but" & "or" & "nor":
                bot.deleteMessage(chat.id, message_id)
                bot.sendMessage(chat.id, `7. What time does the bus … London?`, {
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: "arrive",
                                    callback_data: "arrive",
                                },
                            ],
                            [
                                {
                                    text: "comes",
                                    callback_data: "comes",
                                },
                            ],
                            [
                                {
                                    text: "reach",
                                    callback_data: "reach",
                                },
                            ],
                        ],
                    },
                });
                break
        }
    });
}
start();