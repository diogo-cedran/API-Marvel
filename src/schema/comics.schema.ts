import { Schema, model } from 'mongoose'

const comicsSchema = new Schema({
    titulo: String,
    descricao: String,
    dataPublicacao: Date,
    capa: String
}, { timestamps: true });

export default model("comics", comicsSchema)