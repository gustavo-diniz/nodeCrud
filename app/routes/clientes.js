var dbConnection = require('../infra/dbConnection');

module.exports = function (app) {
    
    function _excluirCliente(clienteExclusao, res){
        var connection = app.infra.DbConnection();
        var clientesDAO = new app.infra.ClientesDAO(connection);
        clientesDAO.excluir(clienteExclusao, function (erros, resultados) {
            res.json({
                message: 'registro excluido com sucesso !',
                code: 200
            });
        })
        
        connection.end();
    };
    
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
        var cliente = req.body;
        var connection = app.infra.DbConnection();
        var clientesDAO = new app.infra.ClientesDAO(connection);

        clientesDAO.salvar(cliente, function (erros, resultados) {

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

    app.post("/clientes/excluir", function (req, res) {
        var cliente = req.body;

        var connection = app.infra.DbConnection();
        var clientesDAO = new app.infra.ClientesDAO(connection);

        clientesDAO.buscarPorNome(cliente, function (erros, resultados) {

            if (erros != null) {
                res.json({
                    message: 'Erro ao inserir registro !',
                    code: 200
                });
                
            } else {

                if (resultados != null && resultados.length > 0) {
                    console.log(resultados);
                    var clienteExclusao = resultados[0];
                    _excluirCliente(clienteExclusao, res);

                } else {
                    res.json({
                        message: 'registro não localizado !',
                        code: 200
                    });
                }
            }

        });

        connection.end();
    });
    
    
}
