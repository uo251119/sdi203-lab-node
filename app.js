// Módulos
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var swig = require('swig');
var mongo = require('mongodb');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var gestorBD = require("./modules/gestorBD.js");
gestorBD.init(app,mongo);

app.set('port', 8081);
app.set('db', 'mongodb://admin:sdi@tiendamusica-shard-00-00-qepb7.mongodb.net:27017,tiendamusica-shard-00-01-qepb7.mongodb.net:27017,tiendamusica-shard-00-02-qepb7.mongodb.net:27017/test?ssl=true&replicaSet=tiendamusica-shard-0&authSource=admin&retryWrites=true');

require("./routes/rusuarios.js")(app, swig, gestorBD);
require("./routes/rcanciones.js")(app, swig, gestorBD);

// lanzar el servidor
app.listen(app.get('port'), function () {
    console.log("Servidor activo");
});