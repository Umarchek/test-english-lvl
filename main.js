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
        var count = 0
        function one() {
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
        }
        function two() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `2. My brother says he'll never forget … the Niagara Falls for the first time.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "he saw",
                                callback_data: "he saw",
                            },
                        ],
                        [
                            {
                                text: "to see",
                                callback_data: "to see",
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

        }
        function third() {
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
        }
        function four() {
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
        }
        function five() {
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
        }
        function six() {
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
        }
        function seven() {
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
        }
        function eight() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `8. She must … on the phone. His line is constatnly busy.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "talked",
                                callback_data: "talked",
                            },
                        ],
                        [
                            {
                                text: "be talking",
                                callback_data: "be talking",
                            },
                        ],
                        [
                            {
                                text: "have talked",
                                callback_data: "have talked",
                            },
                        ],
                    ],
                },
            });
        }
        function nine() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `9. They said they … a wonderful time in Istanbul the previous spring.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "had had",
                                callback_data: "had had",
                            },
                        ],
                        [
                            {
                                text: "were having",
                                callback_data: "were having",
                            },
                        ],
                        [
                            {
                                text: "would have",
                                callback_data: "would have",
                            },
                        ],
                    ],
                },
            });
        }
        function ten() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `10. After working at the hospltal for a year, Bob finally … to sleepless nights.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "was used to",
                                callback_data: "was used to",
                            },
                        ],
                        [
                            {
                                text: "got used to",
                                callback_data: "got used to",
                            },
                        ],
                        [
                            {
                                text: "used to",
                                callback_data: "used to",
                            },
                        ],
                    ],
                },
            });
        }
        function eleven() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `11. The athletes … for two hours before they decided to have a break.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "have been training",
                                callback_data: "have been training",
                            },
                        ],
                        [
                            {
                                text: "had been training",
                                callback_data: "had been training",
                            },
                        ],
                        [
                            {
                                text: "must have training",
                                callback_data: "must have training",
                            },
                        ],
                    ],
                },
            });
        }
        function twelve() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `12. If John … them, they wouldn't have opened the café on time.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "haven't helped",
                                callback_data: "haven't helped",
                            },
                        ],
                        [
                            {
                                text: "wouldn't help",
                                callback_data: "wouldn't help",
                            },
                        ],
                        [
                            {
                                text: "hadn't helped",
                                callback_data: "hadn't helped",
                            },
                        ],
                    ],
                },
            });
        }
        function thirteen() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `13. Bill asked his new neighbors where … from.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "are they",
                                callback_data: "are they",
                            },
                        ],
                        [
                            {
                                text: "they were",
                                callback_data: "they were",
                            },
                        ],
                        [
                            {
                                text: "were they",
                                callback_data: "were they",
                            },
                        ],
                    ],
                },
            });
        }
        function fourteen() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `14. Liza didn't mean … you. It was just a bad joke.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "offend",
                                callback_data: "offend",
                            },
                        ],
                        [
                            {
                                text: "offending",
                                callback_data: "offending",
                            },
                        ],
                        [
                            {
                                text: "to offend",
                                callback_data: "to offend",
                            },
                        ],
                    ],
                },
            });
        }
        function fifteen() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `15. Debora tells the … stories I have ever heard.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "better",
                                callback_data: "better",
                            },
                        ],
                        [
                            {
                                text: "best",
                                callback_data: "best",
                            },
                        ],
                        [
                            {
                                text: "most good",
                                callback_data: "most good",
                            },
                        ],
                    ],
                },
            });
        }
        function sixteen() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `16. Wendy is … shy to ask what he thinks about her present.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "enough",
                                callback_data: "enough",
                            },
                        ],
                        [
                            {
                                text: "too",
                                callback_data: "too",
                            },
                        ],
                        [
                            {
                                text: "very",
                                callback_data: "very",
                            },
                        ],
                    ],
                },
            });
        }
        function seventeen() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `17. Our health has greatly … ever since we stopped eating sugar.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "developed",
                                callback_data: "developed",
                            },
                        ],
                        [
                            {
                                text: "increased",
                                callback_data: "increased",
                            },
                        ],
                        [
                            {
                                text: "improved",
                                callback_data: "improved",
                            },
                        ],
                    ],
                },
            });
        }
        function eighteen() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `18. Fred … have painted such a winderful picture. He has never liked drawing!`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "shouldn't",
                                callback_data: "shouldn't",
                            },
                        ],
                        [
                            {
                                text: "needn't",
                                callback_data: "needn't",
                            },
                        ],
                        [
                            {
                                text: "can't",
                                callback_data: "can't",
                            },
                        ],
                    ],
                },
            });
        }
        function nineteen() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `19. This novel … at the end of the 19th century.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "was written",
                                callback_data: "was written",
                            },
                        ],
                        [
                            {
                                text: "wrote",
                                callback_data: "wrote",
                            },
                        ],
                        [
                            {
                                text: "had written",
                                callback_data: "had written",
                            },
                        ],
                    ],
                },
            });
        }
        function twenty() {
            bot.deleteMessage(chat.id, message_id)
            bot.sendMessage(chat.id, `20. Hurry up. The lesson … at 9.00 pm.`, {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "will start",
                                callback_data: "will start",
                            },
                        ],
                        [
                            {
                                text: "is starting",
                                callback_data: "is starting",
                            },
                        ],
                        [
                            {
                                text: "starts",
                                callback_data: "starts",
                            },
                        ],
                    ],
                },
            });
        }
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
                one()
                break
            case "not to lift":
                count + +1
                two()
                break
            case "isn't lift":
                two()
                break
            case "to not lift":
                two()
                break
            case "seeing":
                count + +1
                console.log(count)
                third()
                break
            case "to see":
                third()
                break
            case "he saw":
                third()
                break
            case "have been":
                four()
                break
            case "are":
                four()
                break
            case "were":
                count + +1
                four()
                break
            case "had cut it":
                five()
                break
            case "had it cut":
                count + +1
                five()
                break
            case "have to cut it":
                five()
                break
            case "faster":
                count + +1
                six()
                break
            case "fastly":
                six()
                break
            case "more fast":
                six()
                break
            case "but":
                seven()
                break
            case "or":
                seven()
                break
            case "nor":
                count + +1
                seven()
                break
            case "arrive":
                eight()
                break
            case "comes":
                eight()
                break
            case "reach":
                count + +1
                eight()
                break
            case "talked":
                nine()
                break
            case "be talking":
                count + +1
                nine()
                break
            case "have talked":
                nine()
                break
            case "had had":
                count + +1
                ten()
                break
            case "were having":
                ten()
                break
            case "would have":
                ten()
                break
            case "was used to":
                eleven()
                break
            case "got used to":
                eleven()
                break
            case "used to":
                eleven()
                break
            case "have been training":
                twelve()
                break
            case "had been training":
                count + +1
                twelve()
                break
            case "must have training":
                twelve()
                break
            case "haven't helped":
                thirteen()
                break
            case "wouldn't help":
                thirteen()
                break
            case "hadn't helped":
                count + +1
                thirteen()
                break
            case "are they":
                fourteen()
                break
            case "they were":
                fourteen()
                break
            case "were they":
                fourteen()
                break
            case "offend":
                fifteen()
                break
            case "offending":
                fifteen()
                break
            case "to offend":
                count + +1
                fifteen()
                break
            case "better":
                sixteen()
                break
            case "best":
                sixteen()
                break
            case "most good":
                sixteen()
                break
            case "enough":
                seventeen()
                break
            case "too":
                count + +1
                seventeen()
                break
            case "very":
                seventeen()
                break
            case "developed":
                eighteen()
                break
            case "increased":
                eighteen()
                break
            case "improved":
                count + +1
                eighteen()
                break
            case "shouldn't":
                nineteen()
                break
            case "needn't":
                nineteen()
                break
            case "can't":
                count + +1
                nineteen()
                break
            case "was written":
                count + +1
                twenty()
                break
            case "wrote":
                twenty()
                break
            case "had written":
                twenty()
                break
            case "will start":
            case "is starting":
            case "starts":
                bot.sendMessage(chat.id,`test`)
                break
        }
    });
}
start();