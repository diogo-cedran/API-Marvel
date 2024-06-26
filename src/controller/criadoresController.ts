import { Request, Response } from 'express'
import criadoresService from '../service/criadoresService';
import { criadoresType } from '../types/criadores.type';
import axios from 'axios';

class criadoresController{
    
    async buscarCriadoresDaMarvel(req: Request, res: Response) {
        try {
            const url = 'https://gateway.marvel.com:443/v1/public/series/832/creators?ts=1&apikey=b725bf2210b9af96552e535b3a79eec4&hash=d7d1d8aa5d430ac182a14eb5433e81f2'
            const response = await axios.get(url);
            const data = response.data.data.results;

            for (const criador of data) {
                const novoCriador: criadoresType = {
                    nome: criador.fullName,
                    funcao: 'Autor',
                    quadrinhosFeitos: criador.comics.available.toString() 
                };
                await criadoresService.create(novoCriador);
            }
            return res.status(201).json({ message: 'Criadores da Marvel salvos com sucesso no banco de dados.' });
        } catch (error) {
            console.error(error);
        }
    }
    
    async create(req:Request, res:Response){
        try{
            const criadores = await criadoresService.create(req.body)
            res.status(201);
            return res.json(criadores)
        }catch(error){
            console.error(error);
        }   
    }

    async findAll(req:Request, res:Response){
        try{
            const criadores = await criadoresService.findAll()
            res.status(200);
            return res.json(criadores);
        }catch(error){
            console.error(error)
        }
    }

    async update(req:Request, res:Response){
        try{
            const criadores = await criadoresService.update(req.params.id, req.body);
            res.status(201);
            return res.json(criadores);
        }catch(error){
            console.error(error);
        }
    }

    async delete(req:Request, res:Response){
        try{
            const criadores = await criadoresService.delete(req.params.id);
            res.status(201);
            return res.json(criadores);
        }catch(error){
            console.error(error);
        }
    }

    async buscarPorFuncao(req: Request, res: Response) {
         try {
             const funcao = req.params.funcao;
             const criadores = await criadoresService.buscarPorFuncao(funcao);
             return res.status(200).json(criadores);
         } catch (error) {
             console.error(error);
         }
     }
}

export default new criadoresController()