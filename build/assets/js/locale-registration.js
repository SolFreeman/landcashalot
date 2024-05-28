$.get("https://ipinfo.io", function (response) {
	var countryCode = response.country;
	console.log('IP Info Response:', response);

	window.__countryCode = countryCode;
	function addParams() {
		window.__params_ajax = '?btag=cx_36942_478759';
		
		$('.params').attr('href', function () {
			return $(this).attr("href") + window.__params_ajax;
		});
		console.log(window.__params_ajax)
	}
	addParams();

	const translateMessages = {
		'ru': {
			'title': '<img src="./assets/img/title-ru.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Пароль',
			'reg_button': 'Зарегистрироваться',
			'promotions': 'Промоакции',
		},
		'en': {
			'title': '<img src="./assets/img/title-en.svg" alt="title">',
			'reg_email': 'Email',
			'reg_password': 'Password',
			'reg_button': 'SIGN UP',
			'promotions': 'Promotions',
		},

		'de': {
			'title': '<img src="./assets/img/title-de.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Passwort',
			'reg_button': 'ANMELDEN',
			'promotions': 'Aktionen',
		},

		'es': {
			'title': '<img src="./assets/img/title-es.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Contraseña',
			'reg_button': 'REGISTRO',
			'promotions': 'Promociones',
		},
		'dk': {
			'title': '<img src="./assets/img/title-dk.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Adgangskode',
			'reg_button': 'TILMELD DIG',
			'promotions': 'Kampagner',
		},
		'no': {
			'title': '<img src="./assets/img/title-no.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Passord',
			'reg_button': 'REGISTRER DEG',
			'promotions': 'Kampanjer',
		},

		'kz': {
			'title': '<img src="./assets/img/title-kz.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Құпия сөз',
			'reg_button': 'Тіркеу',
			'promotions': 'Акциялар',
		},

		'pt': {
			'title': '<img src="./assets/img/title-pt.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Senha',
			'reg_button': 'REGISTO',
			'promotions': 'Promoções',
		},
		'pt-br': {
			'title': '<img src="./assets/img/title-pt(br).svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Palavra-passe',
			'reg_button': 'CADASTRO-SE',
			'promotions': 'Promoções',
		},
		'fi': {
			'title': '<img src="./assets/img/title-fi.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Salasana',
			'reg_button': 'LISÄÄNTYMINEN',
			'promotions': 'Kampanjat',
		},
		// 'ua': {
		// 	'title': '<img src="./assets/img/title-ua.svg" alt="">',
		// 	'reg_email': 'Email',
		// 	'reg_password': 'Пароль',
		// 	'reg_button': 'Зареєструватися',
		// 	'promotions': 'Промоакції',
		// },
		'pl': {
			'title': '<img src="./assets/img/title-pl.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Hasło',
			'reg_button': 'ZAPISZ SIĘ',
			'promotions': 'Promocje',
		},
		'it': {
			'title': '<img src="./assets/img/title-it.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Password',
			'reg_button': 'ISCRIVERSI',
			'promotions': 'Promozioni',
		},
		'hu': {
			'title': '<img src="./assets/img/title-hu.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Jelszó',
			'reg_button': 'REGISZTRÁCIÓ',
			'promotions': 'Promóciók',
		},
		'fr': {
			'title': '<img src="./assets/img/title-fr.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'Mot de passe',
			'reg_button': 'ENREGISTREMENT',
			'promotions': 'Promotions',
		},
		'hi': {
			'title': '<img src="./assets/img/title-hi.svg" alt="">',
			'reg_email': 'Email',
			'reg_password': 'पासवर्ड',
			'reg_button': 'पंजीकरण करवाना',
			'promotions': 'प्रचार',
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
			
		case 'RU': language = 'ru'; break;
		case 'EN': language = 'en'; break;
		case 'ES': language = 'es'; break;
		case 'PT': language = 'pt'; break;
		case 'PT-BR': language = 'pt-br'; break;
		// case 'UA': language = 'ua'; break;
		case 'DE': language = 'de'; break;
		case 'PL': language = 'pl'; break;
		case 'IT': language = 'it'; break;
		case 'FI': language = 'fi'; break;
		case 'HU': language = 'hu'; break;
		case 'BR': language = 'pt'; break;
		case 'DK': language = 'dk'; break;
		case 'HI': language = 'hi'; break;
		case 'FR': language = 'fr'; break;
		case 'DK': language = 'dk'; break;
		case 'NO': language = 'no'; break;
		case 'KZ': language = 'kz'; break;
		default: language = 'en'; break;
	}

	setLanguage(language);

	function setLanguage(language) {

		$('html').attr('lang', language);
		let langImg = $('.current-lang img');
		let langUrlImg = './assets/img/' + language + '.svg';
		$('.current-lang span').text(language);
		langImg.attr('src', langUrlImg);
		langImg.attr('alt', language);

		window.__language = language;

		$('#' + language).addClass('display-none');

		$('.lang').each(function (index, element) {
			if ($(this).is('input')) {
				$(this).attr('placeholder', translateMessages[language][$(this).data('locale')]);
			} else if ($(this).is('a')) {
				$(this).attr('href', translateMessages[language][$(this).data('locale')]);
			} else {
				$(this).html(translateMessages[language][$(this).data('locale')]);
			}
		});
		// addParams();
	}

	//Country

	function setCountry(country) {
		let optionAllCountry = [];

		$('.select-country option').each(function () {
			optionAllCountry.push($(this).attr('value'));
		})

		$.each(optionAllCountry, function (index, value) {
			if (value === country) {
				$('.select-country').val(country).change();
				return false;
			}
		});

		flagCountry(country);
	}

	setCountry(window.__countryCode);

	function checkCountry(country) {
		let allCountry = ['it', 'en'];

		$.each(allCountry, function (index, value) {
			if (value === country) {
				$('.select-country').prop("selectedIndex", 0);
				return false;
			} else {
				setCountry(country);
			}
		});

		flagCountry(country);
	}

	function flagCountry(country) {
		if (country !== 'select country') {
			$('.select-country-block').removeClass('active');
			$('.select-country-flag').show().attr('style', 'background-image:url("images/flags/' + country + '.svg");');
		} else {
			$('.select-country-flag').hide();
			$('.select-country-block').addClass('active');
		}
	}

	$('.select-country').change(function () {
		let val = $(this).val();
		flagCountry(val);
		checkCurrency(val);
	});

	//Currency

	function setCurrency(currency) {
		let optionAllCurrency = [];

		$('.select-currency option').each(function () {
			optionAllCurrency.push($(this).attr('value'));
		})

		$.each(optionAllCurrency, function (index, value) {
			if (value === currency) {
				$('.select-currency').val(currency).change();
				return false;
			}
		});
	}

	setCurrency(window.__countryCurrency);

	function checkCurrency(language, currency) {
		switch (language) {
			case 'ru': setCurrency('rub'); break;
			case 'ua': setCurrency('uah'); break;
			case 'de': setCurrency('eur'); break;
			case 'vn': setCurrency('vnd'); break;
			case 'ae': setCurrency('aed'); break;
			case 'en': setCurrency('gbp'); break;
			case 'tr': setCurrency('try'); break;
			case 'ar': setCurrency('ars'); break;
			case 'ca': setCurrency('cad'); break;
			case 'fr': setCurrency('cad'); break;
			case 'pl': setCurrency('pln'); break;
			case 'dk': setCurrency('dkk'); break;
			case 'hu': setCurrency('huf'); break;
			case 'no': setCurrency('nok'); break;
			case 'kz': setCurrency('eur'); break;
			case 'hi': setCurrency('ind'); break;
			case 'pt': setCurrency('eur'); break;
			case 'pt-br': setCurrency('brl'); break;
			default: setCurrency('eur'); break;
		}
	}

	$('.languages-toggler').click(function () {
		$('.languages-list').toggleClass('active');
	});

	$('.translate').click(function () {
		$('.lang-list .display-none').removeClass('display-none');
		$('.languages-list').removeClass('active');
		setLanguage($(this).attr('id'));
		checkCountry(window.__language);
		checkCurrency(window.__language, window.__countryCurrency);
	});

	$('.lang-select').on('click', function () {
		$('.lang-list').toggleClass('active')
	});

	$(document).mouseup(function (e) {
		var div = $(".lang-list");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('active');
		}
	});
}, "json");
