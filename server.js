var express = require('express'),
	app = express();

app.use(express.static(__dirname))

.get('/:html' , function(req, res) { 
    res.render(req.params + '.html');
}).listen(8080);

console.log('The Server is up and running!');