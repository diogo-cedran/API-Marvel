import { Request, Response } from 'express';
import {expect} from "@jest/globals";
import comicsController from '../../src/controller/comicsController';
import comicsService from '../../src/service/comicsService';

jest.mock('axios');
jest.mock('../../src/service/comicsService');

describe('Testes para comicsController', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('Teste para buscarComics', () => {
        it('Deve buscar os comics e criá-los no banco de dados', async () => {
            const req = {} as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            await comicsController.buscarComics(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Comics Criados com sucesso' });
        });
    });

    describe('Teste para create', () => {
        it('Deve criar um novo comic', async () => {
            const req = {
                body: {
                    titulo: 'Comic Test',
                    descricao: 'Description Test',
                    dataPublicacao: new Date(),
                    capa: 'path/to/image'
                }
            } as unknown as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            const createdComic = { _id: '1', ...req.body };
            (comicsService.create as jest.Mock).mockResolvedValue(createdComic);

            await comicsController.create(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(createdComic);
        });
    });

    describe('Teste para findAll', () => {
        it('Deve retornar todos os comics', async () => {
            const req = {} as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            const comics = [{ _id: '1', titulo: 'Comic 1' }, { _id: '2', titulo: 'Comic 2' }];
            (comicsService.findAll as jest.Mock).mockResolvedValue(comics);

            await comicsController.findAll(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(comics);
        });
    });

    describe('Teste para update', () => {
        it('Deve atualizar um comic existente', async () => {
            const req = {
                params: { id: '1' },
                body: {
                    titulo: 'Comic Test Updated',
                    descricao: 'Description Test Updated',
                    dataPublicacao: new Date(),
                    capa: 'path/to/image-updated'
                }
            } as unknown as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            const updatedComic = { _id: '1', ...req.body };
            (comicsService.update as jest.Mock).mockResolvedValue(updatedComic);

            await comicsController.update(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(updatedComic);
        });
    });

    describe('Teste para delete', () => {
        it('Deve deletar um comic existente', async () => {
            const req = { params: { id: '1' } } as unknown as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            const deletedComic = 'Comic Removido';
            (comicsService.delete as jest.Mock).mockResolvedValue(deletedComic);

            await comicsController.delete(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(deletedComic);
        });
    });

    describe('Teste para retornarTotalComics', () => {
        it('Deve retornar o total de comics', async () => {
            const req = {} as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            const comics = [{ _id: '1', titulo: 'Comic 1' }, { _id: '2', titulo: 'Comic 2' }];
            (comicsService.retornarTotalComics as jest.Mock).mockResolvedValue(comics);

            await comicsController.retornarTotalComics(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(comics);
        });
    });

    describe('Teste para buscarDataPublicacao', () => {
        it('Deve retornar as datas de publicação dos comics', async () => {
            const req = {} as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            const datasPublicacao = ['2024-05-01', '2024-05-02', '2024-05-03'];
            (comicsService.datasPublicacao as jest.Mock).mockResolvedValue(datasPublicacao);

            await comicsController.buscarDataPublicao(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(datasPublicacao);
        });
    });
});
