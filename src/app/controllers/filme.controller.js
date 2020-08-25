const filme = require('../models/filme.model')

class Filme {

    /**Métodos para visualizar todos os dados do banco de dados, utilizando QueryParams para definir o valor a ser passado na função para definir os campos que devem ser buscados */
    buscarTodosOsFilmes(req, res) {

        filme.find({})
            .populate('diretor', { nome: 1, imagem: 1 })
            .sort({ nome: 1 })
            .exec((err, data) => {
                if (err) {
                    res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
                } else {
                    if (data.length <= 0) {
                        res.status(200).send({ message: "Não existem filmes cadastrados na base de dados" })
                    } else {
                        res.status(200).send({ message: "Todos os filmes foram recuperados com sucesso", data: data })
                    }
                }
            })
    }

    /**Método para visualizar apenas um dado de acordo com o parâmetro obrigatório especificado na URL */
    buscarUmFilmePeloNome(req, res) {
        const { nomeFilme } = req.params

        if (nomeFilme == undefined || nomeFilme == 'null') {
            res.status(400).send({ message: "O nome do filme deve ser obrigatoriamente preenchido" })
        }

        filme.find({ nome: nomeFilme })
            .populate('diretor', { nome: 1, imagem: 1 })
            .exec((err, data) => {
                if (err) {
                    res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
                } else {
                    if (data.length <= 0) {
                        res.status(200).send({ message: `Filme não encontrado na base de dados` })
                    } else {
                        res.status(200).send({ message: `Filme ${nomeFilme} foi recuperado com sucesso`, data: data })
                    }
                }
            })
    }

    /**Método para inserir um dado no banco de dados */
    criarFilme(req, res) {
        const body = req.body

        filme.create(body, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
            } else {
                res.status(201).send({ message: "Filme criado com sucesso no banco de dados", filme: data })
            }
        })
    }

}
module.exports = new Filme()