var express = require('express');
var bodyParser = require('body-parser');
var rotas = require('../app/routes/rotas')
const cors = require('cors');

module.exports = function() {
	var app = express();
	
	// configurações
	app.set('port', 4000);

	// middleware
	app.use(cors());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	
	rotas(app);

	return app;
};
