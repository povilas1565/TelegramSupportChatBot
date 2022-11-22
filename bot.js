const { Telegraf, session, Markup, Scenes, Telegram } = require('telegraf')
const bot = new Telegraf("5421523292:AAH7IhUsC2MoN1WkLrCWa4OpYjb68-5tm1k")
const bot2 = new Telegram("")

const Sheets = require("./Sheet.js")

const sheets = new Sheets();

//кнопки
const greeting = Markup.inlineKeyboard([
    [
        Markup.button.callback('Условия выполнения', 'Условия выполнения'),
        Markup.button.callback('Информация о приложении', 'Информация о приложении')
    ],
    [
        Markup.button.callback('Стоимость', 'Стоимость'),
    ],
    [
        Markup.button.callback('Официальный выход методички', 'Официальный выход методички')
    ],
    [
        Markup.button.callback('Связаться с оператором', 'Связаться с оператором'),
        Markup.button.callback('Наши контакты', 'Наши контакты')
    ],
    [
        Markup.button.callback('Получить бонус', 'Получить бонус')
    ]
])

const bonus_key = Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе')
    ],
    [
        Markup.button.callback('Подать заявку на бонус', 'Подать заявку на бонус')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const info = Markup.inlineKeyboard([
    [
        Markup.button.callback('Что представляет из себя данная методика?', 'Что представляет?')
    ],
    [
        Markup.button.callback('Стоит ли мне проходить данную методику?', 'Стоит ли мне проходить?')
    ],
    [
        Markup.button.callback('Тизер программы', 'Тизер программы'),
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])


const type_of_uslugi = Markup.inlineKeyboard([
    [
        Markup.button.callback('Бесплатные услуги', 'Бесплатные услуги'),
        Markup.button.callback('Платные услуги', 'Платные услуги')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])


const back_to_type_of_uslugi = Markup.inlineKeyboard([[
    Markup.button.callback('Назад', 'back_to_type_of_uslugi'),
]
])

const official_exit = Markup.inlineKeyboard([
    [
        Markup.button.callback('Включить уведомления о выходе', 'Включить уведомления о выходе'),
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const request_for_bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Подписаться на рассылку', 'Подписаться на рассылку'),
    ],
    [
        Markup.button.callback('Назад', 'back_to_bonus')
    ]
])

const bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе'),
    ],
    [
        Markup.button.callback('Подать заявку на бонус', 'Подать заявку на бонус')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const back_to_main_menu = Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

const back_to_info = Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_info')
    ]
])


const back_to_bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_bonus')
    ]
])
const cancel_bonus = Markup.inlineKeyboard([
    [
        Markup.button.callback('Отмена', 'Отмена')
    ]
])
const bonus_sex = Markup.inlineKeyboard([
    [
        Markup.button.callback('Отмена', 'Отмена')
    ]
])

function main_menu(ctx) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id - 1).catch(err => { })
    ctx.reply("«Здравствуйте! Сегодня вы стали участником сообщества ‘prerecover07’. Мы рады, что вы стали его частью!»", greeting)
}

function info_cicle(ctx) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    bot2.sendPhoto(ctx.from.id, "AgACAgEAAxkBAAEYtZtjPSBuyd7eBtXEa9_EFVJchffB8wACM6wxG5EzoUWBxXfGxBZ3nAEAAwIAA3kAAyoE").then(() =>
        ctx.reply("Текст", info))
}


function bonus_cicle(ctx) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Бонус", bonus_key)
}

function contacts_cicle(ctx) {

    let contacts = Markup.inlineKeyboard([
        [
            Markup.button.url("Instagram", "https://game.helpervk.ru/url/?path=prerecover07&network=www.instagram.com&id="+ctx.chat.id+"&username="+ctx.from.username),
        ],
        [
            Markup.button.url("Vkontakte", "https://game.helpervk.ru/url/?path=public215826928&network=vk.com&id="+ctx.chat.id+"&username="+ctx.from.username),
        ],
        [
            Markup.button.url("Facebook", "https://game.helpervk.ru/url/?path=Pre-recover-111201958394228&network=www.facebook.com&id="+ctx.chat.id+"&username="+ctx.from.username),
        ],
        [
            Markup.button.url("Приложение", "https://www.youtube.com/watch?v=ql9-82oV2JE"),
        ],
        [
            Markup.button.callback('Назад', 'back_to_main_menu'),
        ]
        ])



    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Выберите ту социальную сеть, которая интересна вам", contacts)
}

bot.start(async ctx => {
    sheets._save("Нажали старт", ctx)
    await ctx.reply("Здравствуйте! Я бот - консультант, отвечающий на заранее заготовленные вопросы посетителей нашей компании и формируем информационные запросы и заявки.")
    await ctx.reply("Все заявки с собранными контактными данными отправляются на заранее указанную электронную почту сразу после прошедшего диалога.")
    await ctx.reply("В случае возникновения вопроса - наш консультант может подключиться к беседе посетителя сайта с чат ботов и продолжить диалог.")
    await bot2.sendVideoNote(ctx.from.id, "DQACAgIAAxkBAAEYsmpjPHqar1XDmffmdTJGbZh3pnNB8AACeyIAAlf86Eli3ksU1eoZuioE")
    ctx.reply("«Здравствуйте! Сегодня вы стали участником сообщества ‘prerecover07’. Мы рады, что вы стали его частью!»", greeting)
})

bot.action("Условия выполнения", ctx => {
    sheets._save("Условия выполнения", ctx)
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    bot2.sendPhoto(ctx.from.id, "AgACAgEAAxkBAAEYssVjPIrNHNmgBaYvE6tFS1uArKCK7QACNKwxG5EzoUXIe3grUbxjXAEAAwIAA3kAAyoE").then(() =>
        ctx.reply("Какой-то текст", back_to_main_menu))
})

bot.action("Что представляет?", ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id - 1).catch(err => { })
    ctx.reply("Представляет собой разные вещи", back_to_info)
})

bot.action("Стоит ли мне проходить?", ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id - 1).catch(err => { })
    ctx.reply("Да, стоит", back_to_info)
})

bot.action("Тизер программы", ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id - 1).catch(err => { })
    ctx.reply("Какой тебе нужен тизер? ", back_to_info)
})

bot.action("Информация о приложении", ctx => {
    info_cicle(ctx)
})

bot.action("Стоимость", ctx => {
    price(ctx)
})

function price(ctx) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Текст", back_to_main_menu)
}

bot.action('Бесплатные услуги', ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("1. Удаленное техническое обслуживание\nБлагодаря облачности сервиса, есть возможность решать большинство задач удаленно 24/7 без выезда к клиенту.\n2. Полностью вся методика - бесплатна до первых 3 месяцев", back_to_type_of_uslugi)
})

bot.action('Платные услуги', ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Платные услуги в нашей компании пока не предоставляются", back_to_type_of_uslugi)
})

bot.action("Официальный выход методички", ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    bot2.sendPhoto(ctx.from.id, "AgACAgIAAxkBAAEYta5jPSGU_a0EPIROfxmjPEC1-6um1gACBMcxGxEwUUmRX0XWvh7IqgEAAwIAA3kAAyoE").then(() =>
        ctx.reply("Дата выхода: 2024 год", official_exit))
})


bot.action("Включить уведомления о выходе", ctx => {
    sheets._search("Уведомления о выходе", ctx.from.id).then(function (row) {
        if (row == false) {
            sheets._save("Уведомления о выходе", ctx)
            ctx.reply("Уведомления включены")
        } else {
            ctx.reply("У вас уже включены уведомления")
        }
    });
})

bot.action("Связаться с оператором", ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Оператор свяжется с вами", back_to_main_menu)
    bot2.sendMessage(1034093866, 'Пользователь https://web.telegram.org/z/#' + ctx.chat.id + ' захотел связаться с вами');
})

bot.action("Наши контакты", async ctx => {
    contacts_cicle(ctx)
})

bot.action("Получить бонус", ctx => {
    //write_to_bd("Нажали бонус", ctx.from.id, ctx.from.username)
    bonus_cicle(ctx)
})

bot.action("Информация о бонусе", ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    ctx.reply("Информация", back_to_bonus)
})

bot.action("Подать заявку на бонус", ctx => {
    sheets._search("Заполнили анкету", ctx.from.id).then(function (row) {
        if (row == false) {
            ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
            ctx.reply("Для получения бонуса требуется подписка на рассылку", request_for_bonus)
        } else {
            ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
            ctx.reply("Вы уже заполнили анкету на получение бонуса", back_to_bonus)
        }
    });
})


bot.action("Подписаться на рассылку", ctx => {
    sheets._search("Заполнили анкету", ctx.from.id).then(function (row) {
        if (row == false) {
            sheets._save("Заполнили анкету", ctx)
            ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
            ctx.reply("Заполните анкету: \nВведите имя:", cancel_bonus)

        }
    });
})


bot.on('text', (ctx) => {
    sheets._search("Заполнили анкету", ctx.from.id).then(function (row) {
        if (row != false && ctx.message.text != "Подписаться на рассылку" && ctx.message.text != "Отмена") {
            if (row[1].сity) {
                sheets._update("Заполнили анкету", row[0], "country", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Анкета на бонус успешно заполнена \n", back_to_bonus)
            } else if (row[1].date) {
                sheets._update("Заполнили анкету", row[0], "сity", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите вашу страну:", cancel_bonus)
            } else if (row[1].problem) {
                sheets._update("Заполнили анкету", row[0], "date", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите ваш город:", cancel_bonus)
            } else if (row[1].phone_number_social) {
                sheets._update("Заполнили анкету", row[0], "problem", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите дату, когда возникла проблема:", cancel_bonus)
            } else if (row[1].phone_number) {
                sheets._update("Заполнили анкета", row[0], "phone_number_social", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите вашу проблему:", cancel_bonus)
            } else if (row[1].date_of_birth) {
                sheets._update("Заполнили анкету", row[0], "phone_number", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите ваш номер телефона для связи в социальных сетях:", cancel_bonus)
            } else if (row[1].sex) {
                sheets._update("Заполнили анкету", row[0], "date_of_birth", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: \nВведите ваш номер телефона:", cancel_bonus)
            } else if (row[1].id == ctx.from.id) {
                sheets._update("Заполнили анкету", row[0], "sex", ctx.message.text)
                ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id - 1).catch(err => { })
                ctx.reply("Заполните анкету: Введите Вашу дату рождения", cancel_bonus)
            }
        }
    });
})

bot.action("Отмена", ctx => {
    sheets._search("Заполнилу анкету", ctx.from.id).then(function (row) {
        if (row != false && typeof row[1].country === 'undefined') {
            sheets._delete("Заполнили анкету", row[0])
            bonus_cicle(ctx)
        }
    });
})


bot.action("back_to_main_menu", ctx => {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.callbackQuery.message.message_id).catch(err => { })
    main_menu(ctx)
})

bot.action("back_to_info", ctx => {
    info_cicle(ctx)
})

bot.action("back_to_bonus", ctx => {
    bonus_cicle(ctx)
})

bot.action("back_to_type_of_uslugi", ctx => {
    price(ctx)
})

bot.action("back_to_contacts", ctx => {
    contacts_cicle(ctx)
})


bot.launch()

