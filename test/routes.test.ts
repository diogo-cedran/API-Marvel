import {expect} from "@jest/globals";
import request from 'supertest';
import app from '../src/app';
import { describe, it } from 'node:test';

describe('Testes end-to-end para as rotas da API', () => {


    //Routes Comics
    it('Deve buscar todos os comics no dataBase da Marvel e inserir no banco', async () => {
        const response = await request(app).get('/inserir-comics');
        expect(response.status).toBe(200);
    });

    it('Deve criar um novo comic', async () => {
        const newComic = {
            titulo: 'teste', 
            descricao: 'Descrição do Comic', 
            dataPublicacao:  new Date('2022-04-20T00:00:00.000Z'),
            capa: 'caminho/para/imagem.jpg'
        };
        const response = await request(app).post('/create-comics').send(newComic);
        expect(response.status).toBe(201);
    });

    it('Deve buscar todos os comics', async () => {
        const response = await request(app).get('/comics');
        expect(response.status).toBe(200);
    });

    it('Deve atualizar um comic existente', async () => {
        const updatedComic = {
            titulo: 'comicAtualizado',
            descricao: 'descricaoAtualizada',
            dataPublicacao: '2011-06-22',
            capa: 'http://i.annihil.us/u/prod/marvel/i/mg/7/20/59c3c55197cc9'
        };
        const response = await request(app).put('/comics/123').send(updatedComic);
        expect(response.status).toBe(200);
    });

    it('Deve excluir um comic existente', async () => {
        const response = await request(app).delete('/comics/delete/123');
        expect(response.status).toBe(201); 
    });




    //Routes Criadores
    it('Deve buscar todos os criadores no dataBase da Marvel e inserir no banco', async () => {
        const response = await request(app).get('/inserir-criadores');
        expect(response.status).toBe(200);
    });

    it('Deve criar um novo criador', async () => {
        const newCriador = {
            'nome': 'Cleiton',
            'funcao': 'Autor',
            'quadrinhosFeitos': '15'
        };
        const response = await request(app).post('/create-criadores').send(newCriador);
        expect(response.status).toBe(201);
    });

    it('Deve buscar todos os criadores', async () => {
        const response = await request(app).get('/criadores');
        expect(response.status).toBe(200);
    });
    
    it('Deve atualizar um criador existente', async () => {
        const updatedCriador = {
            nome: 'criadorAtualizado',
            funcao: 'funcaoAtualizada',
            quadrinhosFeitos: '50'
        };
        const response = await request(app).put('/criadores/123').send(updatedCriador);
        expect(response.status).toBe(200);
    });

    it('Deve excluir um criador existente', async () => {
        const response = await request(app).delete('/criadores/delete/123');
        expect(response.status).toBe(201); 
    });



    //Routes Personagens
    it('Deve buscar todos os personagens no dataBase da Marvel e inserir no banco', async () => {
        const response = await request(app).get('/inserir-personagens');
        expect(response.status).toBe(200);
    });

    it('Deve criar um novo personagem', async () => {
        const newPersonagem = {
            nome: 'testeRota',
            urlImagem: 'urlTesteRota',
            descricao: 'descricaoTesteRota'
        };
        const response = await request(app).post('/create-personagens').send(newPersonagem);
        expect(response.status).toBe(201);
    });

    it('Deve buscar todos os personagens', async () => {
        const response = await request(app).get('/personagens');
        expect(response.status).toBe(200);
    });

    it('Deve atualizar um personagem existente', async () => {
        const updatedPersonagem = {
            nome: 'personagemAtualizado',
            urlImagem: 'urlAtualizada',
            descricacao: 'descricaoAtualizada'
        };
        const response = await request(app).put('/personagens/123').send(updatedPersonagem);
        expect(response.status).toBe(200);
    });

    it('Deve excluir um personagem existente', async () => {
        const response = await request(app).delete('/personagens/delete/123');
        expect(response.status).toBe(201);
    });





    //Routes extras
    it('Deve buscar o total de comics', async () => {
        const response = await request(app).get('/total-comics');
        expect(response.status).toBe(200);
    });

    it('Deve buscar os criadores por função', async () => {
        const response = await request(app).get('/buscar-criadores-funcao/Escritor');
        expect(response.status).toBe(200);
    });

    it('Deve buscar o caminho da imagem do personagem', async () => {
        const response = await request(app).get('/buscar-personagem-imagem');
        expect(response.status).toBe(200);
    });

    it('Deve buscar um personagem pelo nome', async () => {
        const response = await request(app).get('/buscar-personagem/TestePersonagem');
        expect(response.status).toBe(200);
    });

    it('Deve buscar os comics por datas de vendas', async () => {
        const response = await request(app).get('/comics-datas-vendas');
        expect(response.status).toBe(200);
    });

});