const
	express =  require('express');
	app = express();
	server =  require('http').createServer(app);
    IO = require('socket.io')
    PORT = process.env.PORT || 80
 io = require('socket.io')(server)

server.listen(PORT)

app.get('/', (next,context) => {
context.end(`<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<!-- Подключение Bootstrap чтобы все выглядело красиво -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
	<title>Ultimate messenger</title>
	<!-- Свои стили -->
	<style>
		body {
			background: #fcfcfc;
		}
	</style>
</head>
<body>
	<!-- Создание меню на сайте (без функций) -->
	<div  class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-#f9005d border-bottom shadow-sm" style="background-color:#f9005d">
		<h5 class="my-0 mr-md-auto" style="color:white" >ultimate messenger                   	(v0.0.1,интерфейс версии 0.0.1)</h5>
		</nav>
		<a class="btn btn-outline-light" href="#">Регистрация</a>
	</div>
	<!-- Основная часть страницы -->
	<div class="container">
		<div class="py-5 text-center">
		
		</div>
		<div class="row">
			<div class="col-6">
				<!-- Форма для получения сообщений и имени -->
				<h3>Отправить сообщение:</h3>
				<form id="messForm">
					<label for="name">Имя</label>
					<input type="text" name="name" id="name" placeholder="Введите имя" class="form-control">
					<br>
					<label for="message">Сообщение</label>
					<textarea name="message" id="message" class="form-control" placeholder="Введите сообщение"></textarea>
					<br>
					<input type="submit" value="Отправить" class="btn btn-info">
				</form>
			</div>
			<div class="col-6">
				<h3>Сообщения</h3>
				<!-- Вывод всех сообщений будет здесь -->
				<div id="all_mess"></div>
			</div>
		</div>
	</div>
	<!-- Подключаем jQuery, а также Socket.io -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://rme.okis.ru/files/1/9/3/193808/socket.io.js"></script>
	<script>
		// У каждого пользователя будет случайный стиль для блока с сообщенями,
		// поэтому в этом кусочке кода мы получаем случайные числа
		var min = 1;
		var max = 6;
		var random = Math.floor(Math.random() * (max - min)) + min;

		// Устаналиваем класс в переменную в зависимости от случайного числа
		// Эти классы взяты из Bootstrap стилей
		var alertClass;
		switch (random) {
			case 1:
				alertClass = 'secondary';
				break;
			case 2:
				alertClass = 'danger';
				break;
			case 3:
				alertClass = 'success';
				break;
			case 4:
				alertClass = 'warning';
				break;
			case 5:
				alertClass = 'info';
				break;
			case 6:
				alertClass = 'light';
				break;
		}

		// Функция для работы с данными на сайте
		$(function() {
			// Включаем socket.io и отслеживаем все подключения
			var socket = io.connect();
			// Делаем переменные на:
			var $form = $("#messForm"); // Форму сообщений
			var $name = $("#name"); // Поле с именем
			var $textarea = $("#message"); // Текстовое поле
			var $all_messages = $("#all_mess"); // Блок с сообщениями

			// Отслеживаем нажатие на кнопку в форме сообщений
			$form.submit(function(event) {
				// Предотвращаем классическое поведение формы
				event.preventDefault();
				// В сокет отсылаем новое событие 'send mess',
				// в событие передаем различные параметры и данные
				socket.emit('message_new', {mess: $textarea.val(), name: $name.val(), className: alertClass});
				// Очищаем поле с сообщнием
				$textarea.val('');
			});

			// Здесь отслеживаем событие 'add mess', 
			// которое должно приходить из сокета в случае добавления нового сообщения
			socket.on('add mess', function(data) {
				// Встраиваем полученное сообщение в блок с сообщениями
				// У блока с сообщением будет тот класс, который соответвует пользователю что его отправил
				$all_messages.append("<div class='alert alert-" + data.className + "'><b>" + data.name + "</b>: " + data.mess + "</div>");
			});

		});
	</script>

		
</body>
</html>`)

})

app.get('/staff', (next,context) => {
	context.end(`<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<!-- Подключение Bootstrap чтобы все выглядело красиво -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
	<title>Ultimate messenger</title>
	<!-- Свои стили -->
	<style>
		body {
			background: #fcfcfc;
		}
	</style>
</head>
<body>
	<!-- Создание меню на сайте (без функций) -->
	<div  class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-#f9005d border-bottom shadow-sm" style="background-color:#f9005d">
		<h5 class="my-0 mr-md-auto" style="color:white" >ultimate messenger                   	(v0.0.1,интерфейс версии 0.0.1)</h5>
		</nav>
		<a class="btn btn-outline-light" href="#">Регистрация</a>
	</div>
	<!-- Основная часть страницы -->
	<div class="container">
		
		<a style="color:green" href="https://vk.com/red__frog" class="py-5 text-center">Ultimate shadow hacker</a>
		
		</body>
		<html>`
		)
})
let 
	members = [];
	conn = [];

io.sockets.on('connection', next =>
{
  console.log('connection :', next.request.connection._peername);
conn.push(next)

  console.log('New connection from');
  var ip = next.conn.remoteAddress;
console.log(ip);




next.on('disconnect', context =>



{


   conn.splice(conn.indexOf(context),1)
	console.log('member exit')




})


next.on('message_new', data => {
		// Внутри функции мы передаем событие 'add mess',
		// которое будет вызвано у всех пользователей и у них добавиться новое сообщение 
		io.sockets.emit('add mess', {mess: data.mess, name: data.name, className: data.className});
	});



})

