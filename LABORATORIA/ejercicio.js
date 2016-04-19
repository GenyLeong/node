//miserver.js
var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');
var http = require('http');
var url = require('url');

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
  var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')(),
    autocomplete: complete(['hello1234', 'he', 'hello', 'hello12', 'hello123456']),
    sigint: false
  });
 
  var value = 'frank';
  var name = prompt('enter name: ', value);
  console.log('enter echo * password');
  var pw = prompt({echo: '*'});
  var pwb = prompt('enter hidden password (or don\'t): ', {echo: '', value: '*pwb default*'})
  var pwc = prompt.hide('enter another hidden password: ')
  var autocompleteTest = prompt('custom autocomplete: ', {
    autocomplete: complete(['bye1234', 'by', 'bye12', 'bye123456'])
  });
 
  prompt.history.save();
 
 res.send(require('\nName: %s\nPassword *: %s\nHidden password: %s\nAnother Hidden password: %s', name, pw, pwb, pwc));
 res.send(require('autocomplete2: ', autocompleteTest));
 
  function complete(commands) {
    return function (str) {
      var i;
      var ret = [];
      for (i=0; i< commands.length; i++) {
        if (commands[i].indexOf(str) == 0)
          ret.push(commands[i]);
      }
      return ret;
    };
  };
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(page);
 res.send(require('prompt-sync')()('tell me something about yourself: '));
})

app.listen(1340);