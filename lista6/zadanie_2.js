var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', (req, res) => {
    var checkbox = {
        options: [
            { name: 'elem1', value: 1, text: 'element 1' },
            { name: 'elem2', value: 2, text: 'element 2' },
            { name: 'elem3', value: 3, text: 'element 3' }
        ]
    };

    res.render('include', { checkbox });
});
http.createServer(app).listen(3000);