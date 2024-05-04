# Avaliação Desafio Profissional V

## API Marvel - Alunos
Aluno: Diogo Tizolim Cedran
RA: 22014212-2

Aluno: Hudson Uccelli Matias dos Santos
RA: 22045746-2

API key utilizada: https://gateway.marvel.com:443/v1/public/series/832/comics?ts=1&apikey=b725bf2210b9af96552e535b3a79eec4&hash=1ffd275c5130566a2916217b101f2615016bbae9c21c088c021a787cd1002496bfe794c62

## Capitão América - Series 832 - Documentação

## Introdução

Esta é a documentação da API Marvel, que fornece informações sobre quadrinhos, criadores e personagens da Marvel Comics. A API permite realizar operações como buscar, criar, atualizar e excluir registros de quadrinhos, criadores e personagens.

### Código Fonte da API
Todo o código fonte da API está disponível nos seguintes arquivos:

- Comics Controller: comicsController.ts
- Criadores Controller: criadoresController.ts
- Personagens Controller: personagensController.ts
- Schemas: comics.schema.ts, criadores.schema.ts, personagens.schema.ts
- Serviços: comicsService.ts, criadoresService.ts, personagensService.ts
- Tipos: comics.type.ts, criadores.type.ts, personagens.type.ts
- Configuração da Aplicação: app.ts
- Rotas: routes.ts
- Arquivo do Servidor: server.ts

# Documentação das Rotas

A API possui as seguintes rotas:

# Quadrinhos (Comics)
**[GET] /inserir-comic/s**

- Descrição: Esta rota busca os quadrinhos da série 832 da Marvel Comics e os insere no banco de dados.
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: **`{ message: 'Comics Criados com sucesso' }`**
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro
**[POST] /create-comics**
- Descrição: Esta rota cria um novo quadrinho.
- Formato da Requisição: JSON
- Corpo:

![Captura de tela 2024-05-04 151249](https://github.com/diogo-cedran/API-Marvel/assets/116506548/cd42c43a-67dd-401b-9098-929fcffe986a)


- Resposta de Sucesso
  - Status 201 Created
  - Corpo: Dados do quadrinho criado
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[GET]/comics**

- Descrição: Esta rota lista todos os quadrinhos cadatrados.
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Lista de Quadrinhos
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro
 
**[PUT]/comics/:id**
- Descrição: Esta rota atualiza um quadrinho existente.
- Parâmetros de URL: ID do quadrinho
- Formato da Requisição: JSON
- Corpo:

  ![put-comics](https://github.com/diogo-cedran/API-Marvel/assets/116506548/5fad4633-ab42-44bd-a27f-15fc338dcde0)


- Resposta de Sucesso:
  - Status 201 Created
  - Corpo: Dados do quadrinho atualizado
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro
 
**[DELETE]/comics/delete/:id**
- Descrição: Esta rota exclui um quadrinho existente.
- Parâmetros de URL: ID do quadrinho
- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: "Comics Removida"
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro
 
**[GET]/comics-data-vendas**
- Descrição: Esta rota retorna as datas de publicação de todos os quadrinhos cadastrados.
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Lista de datas de publicação
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[GET]/total-comics**
- Descrição: Esta rota retorna o total de quadrinhos cadastrados.
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Lista de quadrinhos
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

# Criadores
**[GET]/inserir-criadores**
- Descrição: Esta rota busca os criadores da série 832 da Marvel Comics e os insere no banco de dados.
- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: **`{ message: 'Criadores da Marvel salvos com sucesso no banco de dados.' }`**
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[POST]/create-criadores**
- Descrição: Esta rota cria um novo criador.
- Formato da Requisição: JSON
- Corpo:
  
![Captura de tela 2024-05-04 152859](https://github.com/diogo-cedran/API-Marvel/assets/116506548/b2b8cf1f-dea6-49b7-85fe-960cb11ed656)


- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: Dados do criador criado
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[GET]/criadores**
- Descrição: Esta rota lista todos os criadores cadastrados.
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Lista de criadores
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro
  
**[PUT]/criadores/:id**
- Descrição: Esta rota atualiza um criador existente.
- Parâmetros de URL: ID do criador
- Formato da Requisição: JSON
- Corpo:

![put-criadores](https://github.com/diogo-cedran/API-Marvel/assets/116506548/56bc071b-2d73-4dc2-9e37-28a35f37292a)


- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: Dados do criador atualizado
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[DELETE]/criadores/delete/:id**
- Descrição: Esta rota exclui um criador existente.
- Parâmetros de URL: ID do criador
- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: "Criador Removido"
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[GET]/buscar-criadores-funcao/:funcao**
- Descrição: Esta rota busca os criadores de acordo com a função especificada.
- Parâmetros de URL: Função do criador
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Lista de criadores
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

# Personagens (Characters)
**[GET]/inserir-personagens**
- Descrição: Esta rota busca os personagens da série 832 da Marvel Comics e os insere no banco de dados.
- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: **`{ message: 'Personagens da Marvel salvos com sucesso no banco de dados.' }`**
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[POST]/create-personagens**
- Descrição: Esta rota cria um novo personagem.
- Formato da Requisição: JSON
- Corpo:

![post-personagens](https://github.com/diogo-cedran/API-Marvel/assets/116506548/4b326a70-4861-4320-8f6d-109605746499)


- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: Dados do personagem criado
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[GET] /personagens**
- Descrição: Esta rota lista todos os personagens cadastrados.
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Lista de personagens
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[PUT] /personagens/:id**
- Descrição: Esta rota atualiza um personagem existente.
- Parâmetros de URL: ID do personagem
- Formato da Requisição: JSON
- Corpo:

![put-personagens](https://github.com/diogo-cedran/API-Marvel/assets/116506548/7c30360d-b709-436b-b0dc-498051909699)


- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: Dados do personagem atualizado
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[DELETE] /personagens/delete/:id**
- Descrição: Esta rota exclui um personagem existente.
- Parâmetros de URL: ID do personagem
- Resposta de Sucesso:
  - Status: 201 Created
  - Corpo: "Personagem Removido"
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[GET] /buscar-personagem/:nome**
- Descrição: Esta rota busca um personagem pelo nome especificado.
- Parâmetros de URL: Nome do personagem
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Dados do personagem
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

**[GET] /buscar-personagem-imagem**
- Descrição: Esta rota retorna as URLs das imagens de todos os personagens cadastrados.
- Resposta de Sucesso:
  - Status: 200 OK
  - Corpo: Lista de URLs das imagens dos personagens
- Possíveis Erros:
  - Status: 500 Internal Server Error
  - Corpo: Mensagem de erro

# Conclusão
Esta documentação fornece informações detalhadas sobre os endpoints da API Marvel, permitindo que os desenvolvedores compreendam e utilizem os recursos disponíveis de forma eficaz. Se houver alguma dúvida ou problema, entre em contato com a equipe responsável pelo desenvolvimento e manutenção da API.

# Realização do teste de carga 
Código para rodar o teste de carga:
`npm test jest test/carga.test.ts`

 PASS  test/carga.test.ts (8.443 s)
  Testes de carga das rotas da API
    √ Deve lidar com uma carga de requisições sem problemas(6258ms)                                                                                                                                              
                                                                                                                                                                                                                   
Test Suites: 1 passed, 1 total                                                                                                                                                                                     
Tests:       1 passed, 1 total                                                                                                                                                                                     
Snapshots:   0 total
Time:        8.575 s, estimated 11 s
Ran all test suites matching /jest|test\\carga.test.ts/i.


# Realização do teste de rota
Código para rodar o teste de rotas:
`npm test jest test/routes.test.ts`

  ✔ Deve excluir um personagem existente (16.2431ms)
  
  ✔ Deve buscar o total de comics (372.3117ms)
  
  ✔ Deve buscar os criadores por função (8.1942ms)
  
  ✔ Deve buscar o caminho da imagem do personagem (9.2283ms)
  
  ✔ Deve buscar um personagem pelo nome (6.3763ms)
  
  ✔ Deve buscar os comics por datas de vendas (250.3627ms)
  
  ✔ Deve buscar todos os personagens (10.2782ms)
  
  ✔ Deve excluir um criador existente (12.8467ms)
  
  ✔ Deve buscar todos os criadores (8.5297ms)
  
  ✔ Deve excluir um comic existente (17.4365ms)
  
  ✔ Deve buscar todos os comics (544.9921ms)
  
  ✖ Deve atualizar um personagem existente (5.8477ms)
  
  ✖ Deve criar um novo personagem (4.8419ms)
  
  ✖ Deve buscar todos os personagens no dataBase da Marvel e inserir no banco (1248.7875ms)
  
  ✖ Deve atualizar um criador existente (4.9477ms)
  
  ✖ Deve criar um novo criador (6.1187ms)
  
  ✖ Deve buscar todos os criadores no dataBase da Marvel e inserir no banco (1230.5708ms)
  
  ✖ Deve atualizar um comic existente (8.4339ms)
  
  ✖ Deve criar um novo comic (23.4861ms)
  
  ✖ Deve buscar todos os comics no dataBase da Marvel e inserir no banco (1488.1429ms)

  
# Realização do teste comunitário
Código para rodar o teste comunitário:
`npm test jest test/routes.test.ts`

Test Suites: 7 failed, 1 passed, 8 total                                                                                                                                                                           
Tests:       15 failed, 17 passed, 32 total                                                                                                                                                                        
Snapshots:   0 total                                                                                                                                                                                               
Time:        35.933s
                                                                                                                                                                                  
Ran all test suites.  
