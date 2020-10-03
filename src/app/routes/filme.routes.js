const express = require('express')
const route = express.Router()
const Filme = require('../controllers/filme.controller')

/**Definindo as rotas da disponíveis na API */
route.get('/listarTodos', Filme.buscarTodosOsFilmes)
route.get('/listarUm/:nomeFilme', Filme.buscarUmFilmePeloNome)
route.post('/criar', Filme.criarFilme)
route.get('/validarNomeFilme', Filme.validarNomeFilme)

module.exports = route