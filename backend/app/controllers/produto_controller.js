var model_produtos = require('../models/produtos');

var controller = {};

module.exports = function() {
	var produtos = model_produtos();

	controller.novo = function(req, res) {
		let codigo = req.body.codigo;
		let nome = req.body.nome;
		let valor = req.body.valor;

		let produto = { codigo: codigo, nome: nome, valor: valor };

		produtos.push(produto);
		res.json({'status': 'ok'}) ;
	};

	controller.atualiza = function(req, res) {
		let codigo_old = req.params.codigo;
		let codigo = req.body.codigo;
		let nome = req.body.nome;
		let valor = req.body.valor;

		let produto = { codigo: codigo, nome: nome, valor: valor };

		for(let i=0; i<produtos.length; i++){
			if(produtos[i].codigo == codigo_old)
				produtos[i] = produto;
		}
		res.json({'status': 'ok'}) ;
	};

	controller.get_produto = function(req, res) {
		let codigo = req.params.codigo;

		for(let i=0; i<produtos.length; i++){
			if(produtos[i].codigo == codigo){
				res.json(produtos[i]) ;
				return;
			}
		}
		res.json({'status': 'not found'}) ;
	};

	controller.deleta = function(req, res) {
		let codigo = req.params.codigo;
		let pos = -1;
		for(let i=0; i<produtos.length; i++){
			if(produtos[i].codigo == codigo){
				pos = i;
			}
		}
		if(pos >= 0){
			produtos.splice(pos, 1);
			res.json({'status': 'ok'}) ;
		}else{
			res.json({'status': 'erro'}) ;
		}
	};

	controller.produtos = function(req,res) {
		res.json(produtos);
	};

	return controller;
};
