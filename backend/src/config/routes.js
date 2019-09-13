// cria uma instancia do express -> servidor http
const express = require('express')
//executa uma funcao e retorna o resultado desta
// a funcao recebe como parametro a instancia de um servidor
module.exports = function (server){
    //cria instancia das rotas da api
    const router = express.Router()
    // configura o servidor para responder a API /api
    server.use('/api', router)
    // cria instancia que representa os metodos GET, POST, PUT e DELETE
    // estes métodos estão associados ao esquema TODO
    const carService = require('../api/car/carService')
    // registra a rota /cars
    // então, na verdade teremos a api /api/cars pronta para ser executada
    // localhost:3003/api/cars -> get, post, put e delete
    carService.register(router, '/cars')
}