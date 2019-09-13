//cria uma instancia do esquema do Car
const Car = require('./car')
// configura os metodos da API
// get -> consulta
// post -> insere
// put -> atualiza
//delete -> remove
Car.methods(['get', 'post', 'put', 'delete'])
//configura as opcoes da atualizacao
//depois de atualizar, retorna a tarefa atualizada (new: true)
// ao atualizar, os validadores devem ser atualizados (runValidators: true)
Car.updateOptions({ new: true, runValidators: true})
// exporta o esquema para ser utlizado em outro arquivo
module.exports = Car
