// Módulos
var express = require('express');
var app = express();

app.set('port', 8081);

app.get('/usuarios', function(req, res) {
    console.log("Depurar aquó");
    res.send('ver usuarios');
});

app.get('/canciones', function(req, res) {
    res.send('ver canciones');
});

// lanzar el servidor
app.listen(app.get('port'), function() {
    console.log("Servidor activo");
});