const translateMessages = {
    'ru': {
        "bonus_title": "Испытай удачу в лучшем онлайн казино! <br> С приветственным бонусом 150% <br> до 3773000 KZT",
        "bonus_sub_title": "Промокод для активации бонуса:",

        "promocode": "WELC15",
        "btn_bonus": "Получить бонус",

        "promotions": "Промоакции",
        "terms_conditions": "Правила и условия",
        "registration": "Регистрация",
        "login": "Логин",
    },

    'en': {
        "bonus_title": "Try your luck in the best online casino with 150% deposit bonus up to 10 000 EUR",
        "bonus_sub_title": "by promo code",

        "promocode": "WELC15",
        "btn_bonus": "Claim bonus",

        "promotions": "Promotions",
        "terms_conditions": "Terms & Conditions",
        "registration": "Sign in",
        "login": "Log in",
    },
    'de': {
        "bonus_title": "Versuchen Sie Ihr Glück im besten Online-Casino mit 150% Einzahlungsbonus bis zu 10 000 EUR",
        "bonus_sub_title": "mit dem Promo-Code",

        "promocode": "WELC15",
        "btn_bonus": "Erhalten Sie einen Bonus",

        "promotions": "Werbeaktionen",
        "terms_conditions": "Bedingungen und Konditionen",
        "registration": "Anmeldung",
        "login": "Einloggen",
    },

    'it': {
        "hero_title": "Bonus di benvenuto",
        "hero_sub_title_1": "100% fino a 100€",

        "promocode": "Promo: ",
        "btn": "ottieni il tuo bonus",

        "step_one": "Iscriviti ",
        "step_two": "Inserisci il codice promozionale",
        "step_three": "Effettua un deposito",
        "step_four": "Ottieni il tuo bonus",

    },
    'es': {
        "hero_title": "Bonificación de bienvenida",
        "hero_sub_title_1": "100% hasta 100€",

        "promocode": "Promoción: ",
        "btn": "Consigue tu bonificación",

        "step_one": "Regístrate",
        "step_two": "Introduce el código promocional",
        "step_three": "Haz un ingreso",
        "step_four": "Consigue tu bonificación",
    },

    'hu': {
        "hero_title": "Üdvözlő bónusz",
        "hero_sub_title_1": "100% akár 100€",

        "promocode": "Promo: ",
        "btn": "Szerezd meg a bónuszodat",

        "step_one": "Regisztrálj",
        "step_two": "Ird be a promóciós kódot",
        "step_three": "Tégy befizetést",
        "step_four": "Szerezd meg a bónuszt!",
    },

    'pt': {
        "hero_title": "Bónus de boas-vindas",
        "hero_sub_title_1": "100% até 100€",

        "promocode": "Promoção: ",
        "btn": "Receba o seu bónus",

        "step_one": "Inscreva-se",
        "step_two": " Introduza o código promocional ",
        "step_three": "Faça um depósito",
        "step_four": "Receba o seu bónus",
    },

};

let language;

switch (window.__countryCode) {
    case 'en':
        language = 'en';
        break;
    case 'de':
        language = 'de';
        break;
    case 'it':
        language = 'it';
        break;
    case 'es':
        language = 'es';
        break;
    case 'hu':
        language = 'hu';
        break;
    case 'pt':
        language = 'pt';
        break;
    default:
        language = 'en';
        break;
}

function setLanguage(language) {
    window.__countryCode = language;

    $('html').attr('lang', language);

    let langImg = 'img/flags-language/' + language + '.svg';
    let langActiveImg = $('.lang-active-img');

    $('.lang-active').text(language);
    langActiveImg.attr('src', langImg);
    langActiveImg.attr('alt', language);

    let langId = $('#' + language);

    $('.lang-item').removeClass('btn-active');
    langId.addClass('btn-active');
    langId.parent('li').addClass('btn-active');

    $('[data-locale]').each(function (index, element) {
        $(this).attr('class', language).html(translateMessages[language][$(this).data('locale')]);
    });
}

$('.lang-toggle').click(function () {
    $('.lang-list').toggleClass('active');
});

$('.translate').click(function () {
    setLanguage($(this).attr('id'));
    $('.lang-list').removeClass('active');
});

setLanguage(language);