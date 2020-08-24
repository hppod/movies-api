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
    ano: {
        type: Number,
        required: false
    },
    classificacaoIndicativa: {
        type: String,
        required: false
    },
    estudio: {
        type: String,
        trim: true
    },
    duracao: {
        type: Number
    },
    imagem: {
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