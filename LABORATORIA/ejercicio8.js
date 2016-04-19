  //basic: 
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
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
 
  console.log('\nName: %s\nPassword *: %s\nHidden password: %s\nAnother Hidden password: %s', name, pw, pwb, pwc);
  console.log('autocomplete2: ', autocompleteTest);
 
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
})
console.log(require('prompt-sync')()('tell me something about yourself: '))
app.listen(1337);



var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}).listen(8888);
 
