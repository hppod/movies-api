const filmeschema = require('./../models/filmes.model')

/**Função para definir quais campos devem ser buscados ao realizar um find no banco de dados */
function definirCamposDeBusca(campos) {
    if (campos == 'nome18') {
        return { nome: 1, maior18: 1 }
    } else if (campos == 'nome') {
        return { nome: 1 }
    } else {
        return null
    }
}

class Filme {

    /**Método para inserir um dado no banco de dados */
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

    /**Métodos para visualizar todos os dados do banco de dados, utilizando QueryParams para definir o valor a ser passado na função para definir os campos que devem ser buscados */
    visualizarFilmes(req, res) {
        const campos = req.query.campos

        filmeschema.find({}, definirCamposDeBusca(campos), (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
            } else {
                res.status(200).send({ message: "Todos os filmes foram recuperados com sucesso", filmes: data })
            }
        })
    }

    /**Método para visualizar apenas um dado de acordo com o parâmetro obrigatório especificado na URL */
    visualizarUmFilme(req, res) {
        const nome = req.params.nome

        filmeschema.findOne({ nome: nome }, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
            } else {
                res.status(200).send({ message: `Filme ${nome} foi recuperado com sucesso`, filme: data })
            }
        })
    }

    atualizarUmFilme(req, res) {
        const nome = req.params.nome

        filmeschema.updateOne({ nome: nome }, { $set: req.body }, (err, data) => {
            if (err) {
                res.status(500).send({ message: "Houve um erro ao processar a sua requisição", error: err })
            } else {
                res.status(200).send({ message: `Filme ${nome} foi atualizado com sucesso` })
            }
        })
    }

}
module.exports = new Filme()