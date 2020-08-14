const filmeschema = require('./../models/filmes.model')

class Filme {

    criarFilme(req, res) {
        const body = req.body

        filmeschema.create(body, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
            } else {
                res.status(201).send({ message: "Filme criado com sucesso no banco de dados", filme: data })
            }
        })
    }

    visualizarFilmes(req, res) {
        filmeschema.find({}, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
            } else {
                res.status(200).send({ message: "Todos os filmes foram recuperados com sucesso", filmes: data })
            }
        })
    }

}
module.exports = new Filme()