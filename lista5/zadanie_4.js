var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {
        imie: "", nazwisko: "", przedmiot: "", punktyZaZadanie1: "", punktyZaZadanie2: "",
        punktyZaZadanie3: "", punktyZaZadanie4: "", punktyZaZadanie5: "", punktyZaZadanie6: "",
        punktyZaZadanie7: "", punktyZaZadanie8: "", punktyZaZadanie9: "", punktyZaZadanie10: ""
    });
});

app.post('/', (req, res) => {
    if (!req.body.imie || !req.body.nazwisko || !req.body.przedmiot) 
        res.render("index", { message: "Wypełnij zarówno pole \"Imię\", pole \"Nazwisko\" oraz pole \"Przedmiot\"",
            imie: req.body.imie, nazwisko:req.body.nazwisko, przedmiot: req.body.przedmiot, punktyZaZadanie1: req.body.punktyZaZadanie1,
            punktyZaZadanie2: req.body.punktyZaZadanie2, punktyZaZadanie3: req.body.punktyZaZadanie3,
            punktyZaZadanie4: req.body.punktyZaZadanie4, punktyZaZadanie5: req.body.punktyZaZadanie5,
            punktyZaZadanie6: req.body.punktyZaZadanie6, punktyZaZadanie7: req.body.punktyZaZadanie7,
            punktyZaZadanie8: req.body.punktyZaZadanie8, punktyZaZadanie9: req.body.punktyZaZadanie9, punktyZaZadanie10: req.body.punktyZaZadanie10
        });
    else
    res.render("print", {
    imie: req.body.imie, nazwisko:req.body.nazwisko, przedmiot: req.body.przedmiot, punktyZaZadanie1: req.body.punktyZaZadanie1 ? req.body.punktyZaZadanie1 : 0,
    punktyZaZadanie2: req.body.punktyZaZadanie2 ? req.body.punktyZaZadanie2 : 0, punktyZaZadanie3: req.body.punktyZaZadanie3 ? req.body.punktyZaZadanie3 : 0,
    punktyZaZadanie4: req.body.punktyZaZadanie4 ? req.body.punktyZaZadanie4 : 0, punktyZaZadanie5: req.body.punktyZaZadanie5 ? req.body.punktyZaZadanie5 : 0,
    punktyZaZadanie6: req.body.punktyZaZadanie6 ? req.body.punktyZaZadanie6 : 0, punktyZaZadanie7: req.body.punktyZaZadanie7 ? req.body.punktyZaZadanie7 : 0,
    punktyZaZadanie8: req.body.punktyZaZadanie8 ? req.body.punktyZaZadanie8 : 0, punktyZaZadanie9: req.body.punktyZaZadanie9 ? req.body.punktyZaZadanie9 : 0, 
    punktyZaZadanie10: req.body.punktyZaZadanie10  ? req.body.punktyZaZadanie10 : 0
});
});

http.createServer(app).listen(3000);
console.log("Started");