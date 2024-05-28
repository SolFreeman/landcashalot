$.get("https://ipinfo.io", function (response) {
    var countryCode = response.country;
    console.log('IP Info Response:', response);

    window.__countryCode = countryCode;

    const translateMessages = {
        'ru': {
            "bonus_title": "Испытай удачу в лучшем онлайн казино! <br> С приветственным бонусом 150% <br> до 3773000 KZT",
            "bonus_sub_title": "Промокод для активации бонуса:",
            "promocod": "WELC15",
            "btn_bonus": "Получить бонус",
            "promotions": "Промоакции",
            "terms_conditions": "Правила и условия",
            "registration": "Регистрация",
            "login": "Логин",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/ru/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/ru/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Настоящие дилеры, <br>Настоящие развлечения",
            "btn_register": "Зарегестрироваться",

            "betting_title": "Ставки <span>на спорт</span> <span>в онлайн казино</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/ru/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",

            "bonus_reg_title": "<span class='big'>Бонус</span><span class='blue'>до</span><span class='decimal'>45 000 EUR + 50 FS</span>",
            "reg_password": "Пароль",
        },

        'en': {
            "bonus_title": "Try your luck in the best online casino with 150% deposit bonus up to 10 000 EUR",
            "bonus_sub_title": "by promo code",
            "promocod": "WELC15",
            "btn_bonus": "Claim bonus",
            "promotions": "Promotions",
            "terms_conditions": "Terms & Conditions",
            "registration": "Sign in",
            "login": "Log in",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Real Dealers, <br>Real Fun",
            "btn_register": "SIGN UP",

            "betting_title": "BEST <span>BETTING</span> <span>ONLINE CASINO</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",

            "bonus_reg_title": "<span class='big'>Welcome bonus</span><span class='blue'>up to</span><span class='decimal'>45 000 EUR + 50 FS</span>",
            "reg_password": "Password",

            "luck_title": "Try your luck <span>in the best online casino <br> with 150% deposit bonus </span>",
            "luck_promo": "By promo code <span>“WELC15”</span>",
            "sign_in_text": "Sign in",

        },

        'de': {
            "bonus_title": "Versuchen Sie Ihr Glück im besten Online-Casino mit 150% Einzahlungsbonus bis zu 10 000 EUR",
            "bonus_sub_title": "mit dem Promo-Code",
            "promocod": "WELC15",
            "btn_bonus": "Erhalten Sie einen Bonus",
            "promotions": "Werbeaktionen",
            "terms_conditions": "Bedingungen und Konditionen",
            "registration": "Anmeldung",
            "login": "Einloggen",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/de/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/de/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Echte Händler, <br>echter Spaß",
            "btn_register": "ANMELDEN",

            "betting_title": "BESTE <span> WETTEN</span> <span>ONLINE CASINO</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/de/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "sign_in_text": "Anmeldung",

        },

        'it': {
            "bonus_title": "Tentate la fortuna nel miglior casinò online con il 150% di bonus sul deposito fino a 10 000 EUR",
            "bonus_sub_title": "utilizzando il codice promozionale",
            "promocod": "WELC15",
            "btn_bonus": "Ottieni un bonus",
            "promotions": "Promozioni",
            "terms_conditions": "Termini e condizioni",
            "registration": "Registrazione",
            "login": "Ingresso",
            "registration_link": "https://cashalot01.bet/online-casino?&register=true",
            "login_link": "https://cashalot1.bet/online-casino?login=true",
            "logo_link": "https://cashalot01.bet/online-casino",
            "bonus_link": "https://cashalot01.bet/online-casino?&register=true",
            "promo_link": "https://cashalot1.bet/it/promotions",
            "terms_link": "https://cashalot1.bet/pages/terms-and-conditions",
            "diller_title": "Concessionari veri, <br>divertimento vero",
            "btn_register": "ISCRIVERSI",

            "betting_title": "IL MIGLIOR <span> CASINÒ</span> <span>ONLINE PER LE SCOMMESSE</span>",
            "betting_logo_link": "https://cashalot01.bet/live-betting",
            "betting_bonus_link": "https://cashalot01.bet/live-betting?&register=true",

            "live_registration_link": "https://cashalot01.bet/live-casino?&register=true",
            "live_login_link": "https://cashalot1.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot01.bet/live-casino",
            "live_terms_link": "https://cashalot1.bet/pages/terms-and-conditions",
            "sign_in_text": "Registrazione",

        },

        'es': {
            "bonus_title": "Pruebe suerte en el mejor casino en línea con un bono de depósito del 150% hasta 10 000 EUR",
            "bonus_sub_title": "utilizando el código promocional",
            "promocod": "WELC15",
            "btn_bonus": "Consigue una bonificación",
            "promotions": "Promociones",
            "terms_conditions": "Condiciones generales",
            "registration": "Registración",
            "login": "Entrada",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/es/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/es/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Concesionarios reales, <br>diversión real",
            "btn_register": "REGISTRO",

            "betting_title": "MEJORES <span> APUESTAS</span> <span>CASINO ONLINE</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/es/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",

        },

        'hu': {
            "bonus_title": "Próbáljon szerencsét a legjobb online kaszinó 150% -os befizetési bónusz akár 3 883 530HUF",
            "bonus_sub_title": "a promóciós kód",
            "promocod": "WELC15",
            "btn_bonus": "Szerezzen bónuszt",
            "promotions": "Promóciók",
            "terms_conditions": "Feltételek és feltételek",
            "registration": "Regisztráció",
            "login": "Belépés",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/hu/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/hu/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Igazi kereskedők, <br>igazi szórakozás",
            "btn_register": "REGISZTRÁCIÓ",

            "betting_title": "LEGJOBB <span> FOGADÁS</span> <span>ONLINE KASZINÓ</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/hu/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",
        },

        'pt': {
            "bonus_title": "Tente a sua sorte no melhor casino online com um bónus de depósito de 150% até 10.000 EUR",
            "bonus_sub_title": "utilizando o código promocional",
            "promocod": "WELC15",
            "btn_bonus": "Receber um bónus",
            "promotions": "Promoções",
            "terms_conditions": "Termos e condições",
            "registration": "Cadastro",
            "login": "Entrada",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Negociantes reais, <br>diversão real",
            "btn_register": "REGISTO",

            "betting_title": "MELHORES <span> APOSTAS NO</span> <span>CASINO ONLINE</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",

            "sign_in_text": "Cadastre-se",

        },

        'pt-br': {
            "bonus_title": "Tente a sua sorte no melhor casino online com um bónus de depósito de 150% até 54105BRL",
            "bonus_sub_title": "utilizando o código promocional",
            "promocod": "WELC15",
            "btn_bonus": "Receba um bônus",
            "promotions": "Promoções",
            "terms_conditions": "Termos e condições",
            "registration": "Registo",
            "login": "Entrada",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/br/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/br/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Comerciantes de verdade, <br>diversão de verdade",
            "btn_register": "REGISTRE-SE",

            "betting_title": "MELHOR <span> CASSINO</span> <span>ONLINE PARA APOSTAS</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/br/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",
        },

        'pl': {
            "bonus_title": "Spróbuj szczęścia w najlepszym kasynie online z 150% bonusem od depozytu do 46 000 PLN",
            "bonus_sub_title": "przy użyciu kodu promocyjnego",
            "promocod": "WELC15",
            "btn_bonus": "Zdobądź bonus",
            "promotions": "Promocje",
            "terms_conditions": "Zasady i warunki",
            "registration": "Rejestracja",
            "login": "Wejście",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "Prawdziwi dealerzy, <br>prawdziwa zabawa",
            "btn_register": "ZAPISZ SIĘ",

            "betting_title": "NAJLEPSZE <span> KASYNO</span> <span>ONLINE Z ZAKŁADAMI</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot01.bet/live-casino?register=true",
            "live_login_link": "https://cashalot01.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot01.bet/live-casino",
            "live_terms_link": "https://cashalot01.bet/pages/terms-and-conditions",
        },

        'fr': {
            "bonus_title": "tentez votre chance sur le meilleur casino en ligne avec un bonus de dépôt de 150% jusqu'à 14398CAD",
            "bonus_sub_title": "en utilisant le code promo",
            "promocod": "WELC15",
            "btn_bonus": "Obtenez un bonus",
            "promotions": "Promotions",
            "terms_conditions": "Termes et conditions",
            "registration": "Inscription",
            "login": "Entrée",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/fr/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/fr/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "De vrais concessionnaires, <br>un vrai plaisir",
            "btn_register": "ENREGISTREMENT",

            "betting_title": "MEILLEUR<span>CASINO EN LIGNE</span>",
            "betting_logo_link": "https://cashalot.bet/online-casino",
            "betting_bonus_link": "https://cashalot.bet/online-casino?register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/fr/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",
        },

        'hi': {
            "bonus_title": "प्रोमो कोड WELC15 का उपयोग करके 873614 INR तक 150% के जमा बोनस के साथ सर्वश्रेष्ठ ऑनलाइन कैसीनो में अपनी किस्मत आज़माएं।",
            "bonus_sub_title": "",
            "promocod": "",
            "btn_bonus": "बोनस प्राप्त करें",
            "promotions": "प्रचार",
            "terms_conditions": "नियम और शर्तें",
            "registration": "पंजीकरण",
            "login": "प्रवेश द्वार",
            "registration_link": "https://cashalot.bet/online-casino?register=true",
            "login_link": "https://cashalot.bet/online-casino?login=true",
            "logo_link": "https://cashalot.bet/online-casino",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "promo_link": "https://cashalot.bet/promotions",
            "terms_link": "https://cashalot.bet/pages/terms-and-conditions",
            "diller_title": "असली व्यापारी, <br>असली मज़ा",
            "btn_register": "पंजीकरण करवाना",

            "betting_title": "सर्वोत्तम <span> सट्टेबाजी</span> <span>ऑनलाइन कैसीनो</span>",
            "betting_logo_link": "https://cashalot01.bet/live-betting",
            "betting_bonus_link": "https://cashalot01.bet/live-betting?&register=true",

            "live_registration_link": "https://cashalot.bet/live-casino?register=true",
            "live_login_link": "https://cashalot.bet/live-casino?login=true",
            "live_logo_link": "https://cashalot.bet/live-casino",
            "live_terms_link": "https://cashalot.bet/pages/terms-and-conditions",
        },

        'my': {
            "promotions": "Promosi",
            "promo_link": "https://cashalot.bet/promotions",
            "btn_bonus": "Сlaim bonus",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "luck_title": "Cuba nasib anda <span>di kasino dalam talian terbaik <br> dengan bonus deposit 150% </span>",
            "luck_promo": "Dengan kod promosi <span>“WELC15”</span>",
        },

        'ko': {
            "promotions": "프로모션",
            "promo_link": "https://cashalot.bet/promotions",
            "btn_bonus": "보너스 청구",
            "bonus_link": "https://cashalot.bet/online-casino?register=true",
            "luck_title": "150% 입금 <span>보너스가 제공되는 최고의 온라인 <br> 카지노에서 행운을 시험해보세요. </span>",
            "luck_promo": "프로모션 코드 <span>“WELC15”</span>",
        },

        'sw': {
            "sign_in_text": "Registraring",
        },
    };

    let language;

    function getBrowserLanguage() {
        return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || 'en';
    }

    switch (window.__countryCode) {
        case 'CA':
            console.log('IP address is from Canada');
            const browserLanguage = getBrowserLanguage();
            console.log('Browser language:', browserLanguage);
            // Если IP адрес из Канады, то определяем язык в соответствии с языком браузера

            if (browserLanguage.startsWith('fr')) {
                language = 'fr';
            } else if (browserLanguage.startsWith('en')) {
                language = 'en';
            } else {
                console.log('Browser language is not French or English. Defaulting to English.');
                language = 'en'; // Если язык не определен, используем английский
            }
        break;

        case 'EN':
            language = 'en';
            break;
        case 'RU':
            language = 'ru';
            break;
        case 'DE':
            language = 'de';
            break;
        case 'IT':
            language = 'it';
            break;
        case 'ES':
            language = 'es';
            break;
        case 'HU':
            language = 'hu';
            break;
        case 'PT':
            language = 'pt';
            break;
        case 'PL':
            language = 'pl';
            break;
        case 'SW':
            language = 'SW';
            break;
        case 'HI':
            language = 'hi';
            break;
        case 'FR':
            language = 'fr';
            break;
        case 'PT-BR':
            language = 'pt-br';
            break;
        case 'MY':
            language = 'my';
            break;
        case 'KO':
            language = 'ko';
            break;
        default:
            console.log('Unknown country code. Defaulting to English.');
            language = 'en';
            break;
    }

    console.log('Selected language:', language);


    function updateLinks(language) {
        $('[data-link]').each(function (index, element) {
            const linkKey = $(this).data('link');
            if (translateMessages[language][linkKey]) {
                $(this).attr('href', translateMessages[language][linkKey]);
            }
        });
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

        $('.lang-item ').removeClass('btn-active');

        langId.addClass('btn-active');
        langId.parent('li').addClass('btn-active');

        $('[data-locale]').each(function (index, element) {
            // $(this).attr('class', language).html(translateMessages[language][$(this).data('locale')]);
            $(this).html(translateMessages[language][$(this).data('locale')]);
        });
    }

    $('.lang-toggle').click(function () {
        $('.lang-list').toggleClass('active');
        $('.lang').toggleClass('opened');
    });



    $('.translate').click(function () {
        setLanguage($(this).attr('id'));
        updateLinks($(this).attr('id'));
        $('.lang-list').removeClass('active');
        $('.lang').removeClass('opened');
        addParams();
    });

    updateLinks(language);
    setLanguage(language);
    addParams();
}, "json");
