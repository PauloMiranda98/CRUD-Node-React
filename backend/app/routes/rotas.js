// rotas
var controller = require('../controllers/produto_controller')();

module.exports = function(app) {
	app.get('/produtos', controller.produtos);
	app.get('/produtos/:codigo', controller.get_produto);

	app.post('/produtos/', controller.novo);
	app.put('/produtos/:codigo', controller.atualiza);
	app.delete('/produtos/:codigo', controller.deleta);
}
