$.get("https://ipinfo.io", function (response) {
	var countryCode = response.country;
	console.log('IP Info Response:', response);

	window.__countryCode = countryCode;
	function addParams() {
		$('.params').attr('href', function () {
			return $(this).attr("href") + window.__params_ajax;
		});
	}
	addParams();

	const translateMessages = {
		'ru': {
			'title': '<span class="big">Бонус</span><span class="blue"> до</span><br><span class="decimal">45 000 EUR + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Пароль',
			'reg_button': 'Зарегистрироваться',
			'promotions': 'Промоакции',
		},
		'en': {
			'title': '<span class="big">Welcome bonus</span><span class="blue"> up to</span><br><span class="decimal">45 000 EUR + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Password',
			'reg_button': 'SIGN UP',
			'promotions': 'Promotions',
		},

		'de': {
			'title': '<span class="big">Willkommensbonus</span><span class="blue"> von bis zu</span><br><span class="decimal">45 000 EUR + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Passwort',
			'reg_button': 'ANMELDEN',
			'promotions': 'Aktionen',
		},

		'es': {
			'title': '<span class="big">Bonificación de bienvenida</span><span class="blue"> de hasta</span><br><span class="decimal">45 000 EUR + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Contraseña',
			'reg_button': 'REGISTRO',
			'promotions': 'Promociones',
		},
		'dk': {
			'title': '<span class="big">Velkomstbonus</span><span class="blue"> op til</span><br><span class="decimal">336 000 DKK + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Adgangskode',
			'reg_button': 'TILMELD DIG',
			'promotions': 'Kampagner',
		},
		'no': {
			'title': '<span class="big">Velkomstbonus</span><span class="blue"> op til</span><br><span class="decimal">530 000 NOK + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Passord',
			'reg_button': 'REGISTRER DEG',
			'promotions': 'Kampanjer',
		},

		'kz': {
			'title': '<span class="big">45 000 EUR + 50 FS</span><span class="blue"> дейін</span><br><span class="decimal">сәлемдесу бонусы</span>',
			'reg_email': 'Email',
			'reg_password': 'Құпия сөз',
			'reg_button': 'Тіркеу',
			'promotions': 'Акциялар',
		},

		'pt': {
			'title': '<span class="big">Bônus de boas-vindas</span><span class="blue"> de até</span><br><span class="decimal">45.000 EUR + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Senha',
			'reg_button': 'REGISTO',
			'promotions': 'Promoções',
		},
		'pt-br': {
			'title': '<span class="big">Bônus de boas-vindas</span><span class="blue"> até</span><br><span class="decimal">240 000 BRL + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Palavra-passe',
			'reg_button': 'CADASTRO-SE',
			'promotions': 'Promoções',
		},
		'fi': {
			'title': '<span class="big">Bônus de boas-vindas</span><span class="blue"> até</span><br><span class="decimal">240 000 BRL + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Salasana',
			'reg_button': 'LISÄÄNTYMINEN',
			'promotions': 'Kampanjat',
		},
		'ua': {
			'title': '<span class="big">Бонус</span><span class="blue">до</span><br><span class="decimal">45 000 EUR + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Пароль',
			'reg_button': 'Зареєструватися',
			'promotions': 'Промоакції',
		},
		'pl': {
			'title': '<span class="big">Bonus powitalny</span><span class="blue"> do </span><br><span class="decimal">196 000 PLN + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Hasło',
			'reg_button': 'ZAPISZ SIĘ',
			'promotions': 'Promocje',
		},
		'it': {
			'title': '<span class="big">Bonus di benvenuto</span><span class="blue"> fino a </span><br><span class="decimal">45 000 EUR + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Password',
			'reg_button': 'ISCRIVERSI',
			'promotions': 'Promozioni',
		},
		'hu': {
			'title': '<span class="big">Üdvözlő bónusz</span><span class="blue"> akár </span><br><span class="decimal">17 230 000 HUF + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Jelszó',
			'reg_button': 'REGISZTRÁCIÓ',
			'promotions': 'Promóciók',
		},
		'fr': {
			'title': '<span class="big">Bonus de bienvenue</span><span class="blue"> jusqu\'à </span><br><span class="decimal">66 000 CAD + 50 FS</span>',
			'reg_email': 'Email',
			'reg_password': 'Mot de passe',
			'reg_button': 'ENREGISTREMENT',
			'promotions': 'Promotions',
		},
		'hi': {
			'title': '<span class="big">880 000₹ तक + 50 मुफ्त</span><span class="blue"> स्पिन तक </span><br><span class="decimal">स्वागत बोनस</span>',
			'reg_email': 'Email',
			'reg_password': 'पासवर्ड',
			'reg_button': 'पंजीकरण करवाना',
			'promotions': 'प्रचार',
		},
	};

	let language;

	switch (window.__countryCode) {
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
		addParams()
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
