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
        "bonus_title": "Tentate la fortuna nel miglior casinò online con il 150% di bonus sul deposito fino a 10 000 EUR",
        "bonus_sub_title": "utilizzando il codice promozionale",

        "promocode": "WELC15",
        "btn_bonus": "Ottieni un bonus",

        "promotions": "Promozioni",
        "terms_conditions": "Termini e condizioni",
        "registration": "Registrazione",
        "login": "Ingresso",

    },
    'es': {
        "bonus_title": "Pruebe suerte en el mejor casino en línea con un bono de depósito del 150% hasta 10 000 EUR",
        "bonus_sub_title": "utilizando el código promocional",

        "promocode": "WELC15",
        "btn_bonus": "Consigue una bonificación",

        "promotions": "Promociones",
        "terms_conditions": "Condiciones generales",
        "registration": "Registración",
        "login": "Entrada",
    },

    'hu': {
        "bonus_title": "Próbáljon szerencsét a legjobb online kaszinó 150% -os befizetési bónusz akár 3 883 530HUF",
        "bonus_sub_title": "a promóciós kód",

        "promocode": "WELC15",
        "btn_bonus": "Szerezzen bónuszt",

        "promotions": "Promóciók",
        "terms_conditions": "Feltételek és feltételek",
        "registration": "Regisztráció",
        "login": "Belépés",
    },

    'pt': {
        "bonus_title": "Tente a sua sorte no melhor casino online com um bónus de depósito de 150% até 10.000 EUR",
        "bonus_sub_title": "utilizando o código promocional",

        "promocode": "WELC15",
        "btn_bonus": "Receber um bónus",

        "promotions": "Promoções",
        "terms_conditions": "Termos e condições",
        "registration": "Cadastro",
        "login": "Entrada",
    },

    'pt-br': {
        "bonus_title": "Tente a sua sorte no melhor casino online com um bónus de depósito de 150% até 54105BRL",
        "bonus_sub_title": "utilizando o código promocional",

        "promocode": "WELC15",
        "btn_bonus": "Receba um bônus",

        "promotions": "Promoções",
        "terms_conditions": "Termos e condições",
        "registration": "Registo",
        "login": "Entrada",
    },

    'pl': {
        "bonus_title": "Spróbuj szczęścia w najlepszym kasynie online z 150% bonusem od depozytu do 46 000 PLN",
        "bonus_sub_title": "przy użyciu kodu promocyjnego",

        "promocode": "WELC15",
        "btn_bonus": "Zdobądź bonus",

        "promotions": "Promocje",
        "terms_conditions": "Zasady i warunki",
        "registration": "Rejestracja",
        "login": "Wejście",
    },

    'fr': {
        "bonus_title": "tentez votre chance sur le meilleur casino en ligne avec un bonus de dépôt de 150% jusqu'à 14398CAD",
        "bonus_sub_title": "en utilisant le code promo",

        "promocode": "WELC15",
        "btn_bonus": "Obtenez un bonus",

        "promotions": "Promotions",
        "terms_conditions": "Termes et conditions",
        "registration": "Inscription",
        "login": "Entrée",
    },

    'hi': {
        "bonus_title": "प्रोमो कोड WELC15 का उपयोग करके 873614 INR तक 150% के जमा बोनस के साथ सर्वश्रेष्ठ ऑनलाइन कैसीनो में अपनी किस्मत आज़माएं।",
        "bonus_sub_title": "",

        "promocode": "",
        "btn_bonus": "बोनस प्राप्त करें",

        "promotions": "प्रचार",
        "terms_conditions": "नियम और शर्तें",
        "registration": "पंजीकरण",
        "login": "प्रवेश द्वार",
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
    case 'pl':
        language = 'pl';
        break;
    case 'hi':
        language = 'hi';
        break;
    case 'fr':
        language = 'fr';
        break;
    case 'pt-br':
        language = 'pt-br';
        break;
    case 'ru':
        language = 'pt-br';
        break;
    default:
        language = 'ru';
        break;
}

function setLanguage(language) {
    window.__countryCode = language;

    $('html').attr('lang', language);

    let langImg = './assets/img/' + language + '.svg';
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