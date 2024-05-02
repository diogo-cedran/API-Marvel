import comicsSchema from "../schema/comics.schema";
import { comicsType } from "../types/comics.type";

class categoriaService {

    async create(comicsType: comicsType) {
        try {
            const comics = await comicsSchema.create(comicsType)
            return comics
        } catch (error) {
            console.error(error)
        }
    }

    async findAll() {
        try {
            const comics = await comicsSchema.find()
            return comics;
        } catch (error) {
            console.error(error);
        }
    }

    async update(id: string, comics: comicsType) {
        try {
            const uptdatedComics = await comicsSchema.findByIdAndUpdate(id, {
                titulo: comics.titulo,
                descricao: comics.descricao,
                dataPublicacao: comics.dataPublicacao,
                capa: comics.capa
            }, { new: true })
            return uptdatedComics;
        } catch (error) {
            console.error(error);
        }
    }

    async delete(id: string) {
        try {
            const deletedComics = await comicsSchema.findByIdAndDelete(id)
            return "Comics Removida"
        } catch (error) {
            console.error(error);
        }
    }

    async retornarTotalComics() {
        try {
            const comics = await comicsSchema.find({})
            return comics;
        } catch (error) {
            console.error(error);
        }
    }

    
    async datasPublicacao(){
        try{
            const datasPublicacao = await comicsSchema.find({}, {_id:0, dataPublicacao:1});
            return datasPublicacao;
        }catch(error){
            console.error(error);
        }
    }
    
}


export default new categoriaService();