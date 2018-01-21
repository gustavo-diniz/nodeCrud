module. exports = function(app) {
    app.get("/clientes", function(req, res) {
        res.json({ message: 'Ola node!',
                   version: '1.0.0'}); 
    });
}
            