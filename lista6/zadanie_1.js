var http = require('http');
var express = require('express');
var multer = require('multer')

var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  __dirname + '/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
    }
  })
   
  var upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.render("inputFileMulter");
})

app.post("/upload", upload.single("file"), (req, res) => {
    res.end("File uploaded");
})
http.createServer(app).listen(3000);