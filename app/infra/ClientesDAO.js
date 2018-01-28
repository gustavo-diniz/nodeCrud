function ClientesDAO(connection){
    this._connection = connection;
}

ClientesDAO.prototype.lista = function(callback){
    this._connection.query('select * from clientes',callback);
}

ClientesDAO.prototype.buscarPorNome = function(cliente, callback){
    this._connection.query('select * from clientes where nome = ?',[cliente.NOME],callback);
}

ClientesDAO.prototype.salvar = function(cliente, callback){
    this._connection.query('insert into clientes set ?',cliente,callback);
}

ClientesDAO.prototype.excluir = function(cliente, callback){
    this._connection.query('delete from clientes where id_cliente = ?',[cliente.ID_CLIENTE],callback);
}

module.exports = function () {
    return ClientesDAO;
}
