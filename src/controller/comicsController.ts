import { Request, Response, response } from 'express'
import comicsService from '../service/comicsService';
import axios from 'axios';
import { comicsType } from '../types/comics.type';
import Comics from '../schema/comics.schema';

class comicsController {

    async buscarComics(req: Request, res: Response) {
        try {
            const url = 'https://gateway.marvel.com:443/v1/public/series/832/comics?ts=1&apikey=b725bf2210b9af96552e535b3a79eec4&hash=d7d1d8aa5d430ac182a14eb5433e81f2'
            const response = await axios.get(url);
            const data = response.data.data.results;

            for (const dataComics of data) {
                const dateObject = dataComics.dates.find((date: any) => date.type === 'onsaleDate');

                const dataPublicacao = dateObject ? dateObject.date : null;

                const novaDataComics: comicsType = {
                    titulo: dataComics.title,
                    capa: dataComics.thumbnail.path,
                    descricao: dataComics.description,
                    dataPublicacao: dataPublicacao
                };

                await comicsService.create(novaDataComics);
            }
            return res.status(200).json({ message: 'Comics Criados com sucesso' });
        } catch (error) {
            console.error(error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            const comics = await comicsService.create(req.body)
            res.status(201)
            return res.json(comics)
        } catch (error) {
            console.error(error);
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const comics = await comicsService.findAll()
            res.status(200)
            return res.json(comics);
        } catch (error) {
            console.error(error)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const comics = await comicsService.update(req.params.id, req.body);
            res.status(201)
            return res.json(comics);
        } catch (error) {
            console.error(error)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const comics = await comicsService.delete(req.params.id);
            res.status(201);
            return res.json(comics);
        } catch (error) {
            console.error(error);
        }
    }

    async retornarTotalComics(req: Request, res: Response) {
        try {
            const comics = await comicsService.retornarTotalComics();
            res.status(200)
            return res.json(comics)
        } catch (error) {
            console.error(error);
        }
    }

    async buscarDataPublicao(req: Request, res: Response) {
        try {
            const datasPublicacao = await comicsService.datasPublicacao();
            res.status(200);
            return res.json(datasPublicacao);
        } catch (error) {
            console.error(error);
        }
    }

}

export default new comicsController()