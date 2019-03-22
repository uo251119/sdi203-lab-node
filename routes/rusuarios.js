module.exports = function (app, swig) {

    app.get('/usuarios', function (req, res) {
        console.log("Depurar aquó");
        res.send('ver usuarios');
    });

}