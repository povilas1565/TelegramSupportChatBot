module.exports = async function() {

 greeting : Markup.inlineKeyboard([
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
        Markup.button.url('Связаться с оператором', 'https://calimur111_bot'),
        Markup.button.callback('Наши контакты', 'Наши контакты')
    ],
    [
        Markup.button.callback('Получить бонус', 'Получить бонус')
    ]
])

 bonus_key : Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе')
    ],
    [
        Markup.button.callback('Подать заявку на получения бонуса', 'Подать заявку на получения бонуса')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 conditions : Markup.inlineKeyboard([
    [
        Markup.button.callback('Что необходимо для выполнения данной методики?', 'Что необходимо?')
    ]
])

 info : Markup.inlineKeyboard([
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


 type_of_uslugi : Markup.inlineKeyboard([
    [
        Markup.button.callback('Бесплатные услуги', 'Бесплатные услуги'),
        Markup.button.callback('Платные услуги', 'Платные услуги')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])


 back_to_type_of_uslugi : Markup.inlineKeyboard([[
    Markup.button.callback('Назад', 'back_to_type_of_uslugi'),
]
])

 official_exit : Markup.inlineKeyboard([
    [
        Markup.button.callback('Включить уведомления о выходе новой методички', 'Официальный выход приложения'),
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 contacts : Markup.inlineKeyboard([
    [
        Markup.button.callback('Instagram', 'Instagram'),
    ],
    [
        Markup.button.callback('Vkontakte', 'Vkontakte')
    ],
    [
        Markup.button.callback('Cсылка на приложение', 'Cсылка на приложение')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 Instagram : Markup.inlineKeyboard([
    [
        Markup.button.url("Instagram", "https://www.instagram.com/prerecover07")
    ],
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])

 Vkontakte : Markup.inlineKeyboard([
    [
        Markup.button.url("Vkontakte", "https://vk.com/public215826928")
    ],
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])

    Facebook : Markup.inlineKeyboard([
        [
            Markup.button.url("Facebook", "https://www.facebook.com/Pre-recover-111201958394228")
        ],
        [
            Markup.button.callback('Назад', 'back_to_contacts')
        ]
    ])


 program : Markup.inlineKeyboard([
    [
        Markup.button.url("Приложение", "https://www.youtube.com/watch?v=ql9-82oV2JE")
    ],
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])


 bonus : Markup.inlineKeyboard([
    [
        Markup.button.callback('Информация о бонусе', 'Информация о бонусе'),
    ],
    [
        Markup.button.callback('Подать заявку на получение бонуса', 'Подать заявку на получение бонуса')
    ],
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 back_to_main_menu : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_main_menu'),
    ]
])

 back_to_info : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_info')
    ]
])


 back_to_bonus : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_bonus')
    ]
])

 back_to_contacts : Markup.inlineKeyboard([
    [
        Markup.button.callback('Назад', 'back_to_contacts')
    ]
])

}