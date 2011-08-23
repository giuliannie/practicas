var express = require('express');

var app = express.createServer(express.logger());

var operations = {
    add: function(a,b){return a+b},
    sub: function(a,b){return a-b},
    mul: function(a,b){return a*b},
    div: function(a,b){return a/b}
}

app.get('/:op/:a/:b', function(request, response) {
  op = operations[request.params.op],
  var result = op ? op(parseInt(request.params.a,10),
  parseInt(request.params.b,10)) :  "Error";
  
  response.send(''+result);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
