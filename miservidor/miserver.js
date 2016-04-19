//miserver.js
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
	var randomName = faker.name.findName();
	var randomEmail = faker.internet.email();
	var randomImage = faker.image.avatar();
	return{
		nombre: randomName,
		email: randomEmail,
		image: randomImage
	}
}

var generarPost = function(){
	var randomId = faker.random.uuid();
	var randomName = faker.name.findName();
	var randomContent = faker.lorem.words();
	var randomDate = faker.date.past();
	var randomImage = faker.image.imageUrl();
	return{
		id: randomId,
		nombre: randomName,
		contenido: randomContent,
		fecha: randomDate,
		imagen: randomImage
	}
}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/perfil', function (req, res) {
  res.send('Mi perfil!');
})

app.get('/friends', function (req, res) {
	var cantidad = _.random(5,10)
	var usuarios = _.times(cantidad, generarUsuario)
	res.json(usuarios);
})

app.get('/posts', function (req, res) {
	var cantidad = _.random(5,10)
	var posts = _.times(cantidad, generarPost)
	res.json(posts);
})


app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})

app.listen(3000);

