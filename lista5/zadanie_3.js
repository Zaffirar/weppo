var http = require('http');
http.createServer(
    (req, res) => {
        res.setHeader('Content-disposition', 'attachment; filename=plik.txt');
        res.end('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum.');
    }).listen(3000);
console.log('started');



