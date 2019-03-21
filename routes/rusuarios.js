module.exports= function(app) {

    app.get('/usuarios', function (req, res) {
        console.log("Depurar aquó");
        res.send('ver usuarios');
    });

}