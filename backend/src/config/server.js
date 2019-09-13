/*

// define a porta do servidor HTTP
const port = 3003
// cria uma instancia de body parse
const bodyParser = require('body-parser');
// cria uma instancia o express
const express = require('express');
// cria um servidor http express
const server = express();

//configura servidor para obter dados do formulario do usuario
server.use(bodyParser.urlencoded({ exended: true }));
//configura servidor para dados chegarem no formato json
server.use(bodyParser.json());
// sobe o servidor
server.listen(port, function(){

    console.log(`BACKEND is running on port ${port}. `)
})

*/

const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
  console.log(`BACKEND está rodando na porta ${port}.`)
})
module.exports = server
