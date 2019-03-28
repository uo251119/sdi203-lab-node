module.exports = function (app, swig, gestorBD) {

    app.get('/usuarios', function (req, res) {
        console.log("Depurar aquó");
        res.send('ver usuarios');
    });

};