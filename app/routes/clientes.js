var dbConnection = require('../infra/dbConnection');

module.exports = function (app) {
    app.get("/teste", function (req, res) {
        res.json({
            message: 'Ola node!',
            version: '1.0.0'
        });
    });

    app.get("/clientes", function (req, res) {

        var connection = app.infra.DbConnection();
        var clientesDAO = new app.infra.ClientesDAO(connection);

        clientesDAO.lista(function (erros, resultados) {
            res.json(resultados);
        });

        connection.end();
    });

    app.post("/clientes/salvar", function (req, res) {
        console.log(req.body);

        var cliente = req.body;

        var connection = app.infra.DbConnection();
        var clientesDAO = new app.infra.ClientesDAO(connection);
        clientesDAO.salvar(cliente, function (erros, resultados) {
            console.log(erros);
            console.log(resultados);

            if (erros != null) {
                res.json({
                    message: 'Erro ao inserir registro !',
                    code: 200
                });
            } else {
                res.json({
                    message: 'Inserido com sucesso !',
                    code: 200
                });
            }
        });
    });
}
