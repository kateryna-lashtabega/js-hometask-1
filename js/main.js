var requestName = 'Админ', 
	requestNameAnswer,
	requestPassword = 'Чёрный Властелин',
	requestPasswordAnswer;

requestNameAnswer = prompt('Пожалуйста, введите Ваш логин');
if (requestNameAnswer == requestName) {
	requestPasswordAnswer = prompt('Пожалуйста, введите Ваш пароль');
	if (requestPasswordAnswer == requestPassword) {
		alert('Добро пожаловать!');
	} else if (requestPasswordAnswer == null) {
		alert('Вход отменён');
	} else {
	alert('Пароль неверен');
}


} else if (requestNameAnswer == null) {
	alert('Вход отменён');
}

else {
	alert('Я вас не знаю');
}
