module. exports = function(app) {
    app.get("/clientes", function(req, res) {
        res.json({ message: 'Ola node!',
                   version: '1.0.0'}); 
    });
    
    app.get("/produtos", function(req, res) {
        console.log('prod1')
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'gds1903',
            databese: 'Veiculos'
        });
        
        connection.query('SELECT * FROM Veiculos.placa_a limit 10', function(err, results){
            res.send(results);
        });
        
        connection.end();
    });
}
            