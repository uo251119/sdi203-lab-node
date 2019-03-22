// Módulos
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var swig = require('swig');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', 8081);

require("./routes/rusuarios.js")(app, swig);
require("./routes/rcanciones.js")(app, swig);

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
});