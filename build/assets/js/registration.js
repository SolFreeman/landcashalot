function setFormValidator() {
  $('#registration').validate({
    rules: {
      email: {
        required: true,
        email: true,
        maxlength: 65,
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 256,
        passwordCheck: true,
      },
      toaccept: 'required'
    },
    messages: getMessages(window.__countryCode),
    errorElement: 'span',
    errorClass: 'validate-error',
    validClass: 'validate-valid',
    errorPlacement: function(error, element) {
      $(element).parents('.validate').append(error);
    },
    onfocusout: (element) => {
      if (element) {
        element.value = element.value.trim();
        $(element).valid();
      }
    },
    highlight: function(element, errorClass, validClass) {
      $(element).parents('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parents('.validate').removeClass(errorClass).addClass(validClass);
    },
    submitHandler: function(thisForm) {
      disableDoubleClick();
      submitRegistration($(thisForm));
    }
  });
}

function resetFormValidator() {
  $('.registration').validate().destroy();
  setFormValidator();
}

setFormValidator();

$.validator.addMethod('alphabetsOnly', (value, element) => {
  if (/[\d`~!@#№$%^&*()_|+=?;:'",.<>\-\{\}\[\]\\\/ ]/gi.test(value)) {
    return false;
  }
  return true;
});

$.validator.addMethod('email', (value, element) => {
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
});

$.validator.addMethod('passwordCheck', (value, element) => {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]+)$/.test(value);
});

function disableDoubleClick() {
  $('.btn-submit').attr('disabled', true);
  setTimeout(() => {
    $('.btn-submit').attr('disabled', false);
  }, 1000);
}

// submit form, ajax request
function submitRegistration(form) {
  const
    email = form.find('input[name=email]').val(),
    password = form.find('input[name=password]').val(),
    user_country = form.find('select[name=user_country]').val(),
    currency = form.find('select[name=currency]').val(),
    landing = window.__params_ajax,
    regData = {};

  regData.email = email,
  regData.password = password,
  regData.user_country = user_country,
  regData.currency = currency,
  regData.btag = landing

  $.ajax({
    url: 'https://api.cashalot.shop/api/registration',
    type: 'POST',
    data: { data: regData },
    headers: { Accept: 'application/json' },
  }).done((response) => {
    if (response.status == 'success') {
      window.location.href = response.url;
    } else {
      displayError(response.massages);
    }
  })
}

function displayError(messages) {
  let errorMessage = 'Something went wrong. Please contact with your manager.';
  if ($.isArray(messages)) {
    let inputMessages = $.trim(messages.join(' '));
    if (inputMessages.length > 0) {
      errorMessage = inputMessages;
    }
  }
  $('.error').text(errorMessage).fadeIn(300);
  setTimeout(() => {
    $('.error').fadeOut(300);
  }, 4000);
}

// validation messegas
function getMessages(lang) {
	const messages = {
		ru: {
			email: {
				required: 'Введите email',
				email: 'Введите валидный email',
				maxlength: 'Email должен содержать максимум 65 символов',
			},
      password: {
				required: 'Введите пароль',
				minlength: 'Пароль должен содержать минимум 8 символов',
				maxlength: 'Пароль должен содержать максимум 256 символов',
				passwordCheck: 'Пароль должен содержать 1 цифру и 1 заглавную букву',
			},
			toaccept: 'Примите наши условия',
		},
		en: {
			email: {
				required: 'Enter the Email',
				email: 'Please enter a valid email',
				maxlength: 'Email must have a maximum of 65 characters',
			},
      password: {
				required: 'Enter the password',
				minlength: 'Password must be at least 8 characters long',
				maxlength: 'Password must have a maximum of 256 characters',
				passwordCheck: 'Password must contain 1 digit and 1 capital letter',
			},
			toaccept: 'Please accept our policy',
		},
    it: {
			email: {
				required: 'Inserisci un indirizzo e-mail valido',
				email: `Inserisci un'e-mail valida`,
				maxlength: `L'e-mail deve avere un massimo di 65 caratteri`,
			},
      password: {
				required: 'Inserisci la password',
				minlength: 'La password deve essere lunga almeno 6 caratteri',
				maxlength: 'La password deve avere un massimo di 30 caratteri',
				passwordCheck: 'La password deve contenere 1 numero e 1 lettera maiuscola',
			},
			toaccept: 'Si prega di accettare la nostra politica',
		},
    de: {
      email: {
        required: 'Geben Sie Ihre E-Mail ein',
        email: 'Geben Sie eine gültige E-Mail ein',
        maxlength: 'Die E-Mail darf maximal 65 Zeichen enthalten',
      },
      password: {
        required: 'Geben Sie Passwort ein',
        minlength: 'Passwort muss mindestens 8 Zeichen lang sein',
        maxlength: 'Das Passwort darf maximal 256 Zeichen enthalten',
        passwordCheck: 'Das Passwort muss 1 Zahl und 1 Großbuchstaben enthalten',
      },
      toaccept: 'Akzeptieren Sie unsere Bedingungen',
    },
    es: {
      email: {
        required: 'Introduzca el correo electrónico',
        email: 'Introduzca una dirección de correo electrónico válida',
        maxlength: 'El correo electrónico debe tener un máximo de 65 caracteres',
      },
      password: {
        required: 'Introduzca la contraseña',
        minlength: 'La contraseña debe tener al menos 8 caracteres',
        maxlength: 'La contraseña debe tener un máximo de 256 caracteres',
        passwordCheck: 'La contraseña debe contener 1 número y 1 letra mayúscula',
      },
      toaccept: 'Aceptar nuestras condiciones',
    },
    ua: {
      email: {
        required: 'Введіть імейл',
        email: 'Введіть правильний email',
        maxlength: 'Email має містити максимум 65 символів',
      },
      password: {
        required: 'Введіть пароль',
        minlength: 'Пароль має містити мінімум 8 символів',
        maxlength: 'Пароль має містити максимум 256 символів',
        passwordCheck: 'Пароль повинен містити 1 цифру та 1 заголовну літеру',
      },
      toaccept: 'Прийміть наші умови',
    },
	};

	return messages[lang] || messages.en;
}