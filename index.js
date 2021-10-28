const
	express =  require('express');
	app = express();
	server =  require('http').createServer(app);
    IO = require('socket.io')
    PORT = process.env.PORT || 80
 io = require('socket.io')(server)

server.listen(PORT)

app.get('/', (next,context) => {
context.sendFile(__dirname + '/api/indexs.html');


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

