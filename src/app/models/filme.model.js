const { Schema, model } = require('mongoose')

const FilmeSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    genero: {
        type: String,
        required: true,
        trim: true
    },
    classificacaoIndicativa: {
        type: String,
        required: false
    },
    dataLancamento: {
        type: Date
    },
    duracao: {
        type: String
    },
    imagem: {
        type: String,
        required: true,
        trim: true
    },
    sinopse: {
        type: String,
        required: true,
        trim: true
    },
    diretor: {
        type: Schema.Types.ObjectId,
        ref: 'Diretor',
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)
module.exports = model('Filme', FilmeSchema)