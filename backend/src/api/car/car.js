//cria uma instancia node-restful
const restful = require('node-restful')
//fazer a instancia estar preparada para trabalhar com mongodb
const mongoose = restful.mongoose
//cria uma instancia de um esquema do mongodb
//colunas description marca,modelo,ano e flex
const carSchema = new mongoose.Schema({
    marca: { type: String, required: false },
    modelo: { type: String, required: false },
    ano: { type: Number, required: false },
    combustivel: {type: String, required: false}
  })
  
//cria um modelo de esquema chamado Car e o exporta para ser utliazado em outro arquivo
module.exports = restful.model('Car', carSchema)