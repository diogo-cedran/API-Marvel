import { Router } from 'express'
import comicsController from './controller/comicsController'
import criadoresController from './controller/criadoresController';
import personagensController from './controller/personagensController';

const routes = Router();

//Routes Comics
routes.get('/inserir-comics', comicsController.buscarComics);
routes.post('/create-comics', comicsController.create);
routes.get('/comics', comicsController.findAll);
routes.put('/comics/:id', comicsController.update);
routes.delete('/comics/delete/:id', comicsController.delete);

//Routes Criadores
routes.get('/inserir-criadores', criadoresController.buscarCriadoresDaMarvel)
routes.post('/create-criadores', criadoresController.create);
routes.get('/criadores', criadoresController.findAll);
routes.put('/criadores/:id', criadoresController.update);
routes.delete('/criadores/delete/:id', criadoresController.delete);

//Routes Personagens
routes.get('/inserir-personagens', personagensController.buscarPersonagens)
routes.post('/create-personagens', personagensController.create);
routes.get('/personagens', personagensController.findAll);
routes.put('/personagens/:id', personagensController.update);
routes.delete('/personagens/delete/:id', personagensController.delete);

//Routes Auxiliares
routes.get('/comics-datas-vendas', comicsController.buscarDataPublicao);
routes.get('/buscar-personagem/:nome', personagensController.buscarPersonagemNome);
routes.get('/buscar-criadores-funcao/:funcao', criadoresController.buscarPorFuncao);
routes.get('/total-comics', comicsController.retornarTotalComics);
routes.get('/buscar-personagem-imagem', personagensController.retornarCaminhoImagem);

export{
    routes
}