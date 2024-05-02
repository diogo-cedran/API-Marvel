import { Schema, model } from 'mongoose'

const personagensSchema = new Schema({
    nome: String,
    urlImagem: String,
    descricao: String
}, { timestamps: true });

export default model("Personagem", personagensSchema)