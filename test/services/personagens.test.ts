import {expect} from "@jest/globals";
import personagensService from "../../src/service/personagensService";
import personagensSchema from "../../src/schema/personagens.schema";
import { personagensType } from "../../src/types/personagens.type";

jest.mock('../../src/schemas/personagens.schema');

describe('Testes para personagensService', () => {
    
    describe('Teste para a função findAll', () => {
        it('Deve retornar uma lista de personagens', async () => {
            const personagensMock: personagensType [] = [
                { nome: 'Personagem 1', urlImagem: 'url1', descricao: 'Descrição 1' },
                { nome: 'Personagem 2', urlImagem: 'url2', descricao: 'Descrição 2' },
            
            ];
            (personagensSchema.find as jest.Mock).mockResolvedValue(personagensMock);

            const personagens = await personagensService.findAll();

            expect(personagens).toEqual(personagensMock);
        });

        it('Deve retornar uma lista vazia se nenhum personagem for encontrado', async () => {
            (personagensSchema.find as jest.Mock).mockResolvedValue([]);

            const personagens = await personagensService.findAll();

            expect(personagens).toEqual([]);
        });
    });

    describe('Teste para a função create', () => {
        it('Deve criar um novo personagem', async () => {
            const newPersonagem: personagensType = { nome: 'Novo Personagem', urlImagem: 'url', descricao: 'Nova Descrição' };
            const personagemCriadoMock: personagensType = { ...newPersonagem };

            (personagensSchema.create as jest.Mock).mockResolvedValue(personagemCriadoMock);

            const personagemCriado = await personagensService.create(newPersonagem);

            expect(personagemCriado).toEqual(personagemCriadoMock);
        });
    });

    
    describe('Teste para a função update', () => {
        it('Deve atualizar um personagem existente', async () => {
            const id = '662006e1e803c972d03bffa7';
            const updatedPersonagem = {     nome: 'Machine Man',
                urlImagem: 'http://i.annihil.us/u/prod/marvel/i/mg/f/d0/4c003727804b4',
                descricao: '' };
            const personagemAtualizadoMock = { ...updatedPersonagem, _id: id };

            (personagensSchema.findByIdAndUpdate as jest.Mock).mockResolvedValue(personagemAtualizadoMock);

            const personagemAtualizado = await personagensService.update(id, updatedPersonagem);

            expect(personagemAtualizado).toEqual(personagemAtualizadoMock);
        });

        it('Deve retornar null se o personagem não for encontrado', async () => {
            const id = '53232';
            const updatedPersonagem = { nome: 'Homem de ferro',
            urlImagem: 'http://i.annihil.us/u/prod/marvel/i/mg/f/d0/4c003727804b4',
            descricao: '' };

            (personagensSchema.findByIdAndUpdate as jest.Mock).mockResolvedValue(null);

            const personagemAtualizado = await personagensService.update(id, updatedPersonagem);

            expect(personagemAtualizado).toBeNull();
        });
    });

    describe('Teste para a função delete', () => {
        it('Deve deletar um personagem existente', async () => {
            const id = '662006e1e803c972d03bffa7';

            (personagensSchema.findByIdAndDelete as jest.Mock).mockResolvedValue(true);

            const personagemDeletado = await personagensService.delete(id);

            expect(personagemDeletado).toBeTruthy();
        });

        it('Deve retornar false se o personagem não for encontrado', async () => {
            const id = '32132';

            (personagensSchema.findByIdAndDelete as jest.Mock).mockResolvedValue(false);

            const personagemDeletado = await personagensService.delete(id);

            expect(personagemDeletado).toBeFalsy();
        });
    });
});
