module.exports = function(req, res, next) {
    // permitir acesso as APIs de qualquer IP
    res.header('Access-Control-Allow-Origin', '*')
    // permitir acesso as APIs com os métodos GET, POST, PUT e DELETE
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //Configura o cabeçalho da resposta
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    //executa próxima atividade
    next()
  }