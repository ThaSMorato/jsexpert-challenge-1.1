# Story: Seu primeiro time pokemon

A idéia é testar os fundamentos de `testing`, aplicando o que foi visto no
`JS Expert - Módulo 02` num projeto simples e divertido.

Consumindo a [PokeAPI](https://pokeapi.co/), faça uma API que retorne 3 pokemóns aleatórios para formar seu time inicial numa jornada pokemon.

## Requisitos

### Funcionalidades
1. `GET /`

Deve ser a rota padrão da aplicação ao tentar acessar qualquer rota inexistente. (ex.: `/hi`, `/hello`)

2. `GET /team`

Deve retornar um array com 3 pokemóns aleatórios, contendo seus respectivos `name` e `moves`, (mostrando apenas um array de strings com os 3 primeiros `moves` presentes na API. ex.: `["mega-punch","fire-punch","thunder-punch"]`).

### Testes

* [ ] mocks
* [ ] stubs
* [ ] spies
* [ ] testes end-2-end
* [ ] testes unitários
* [ ] 100% de code coverage

### Extras

* [ ] TDD e BDD, será que rola? Acho que vale a tentativa!

## Dicas

* Sinta-se livre pra desenvolver sua solução da melhor maneira possível, a arquitetura recomendada foi pensada para ser um desafio focado em testes e não em arquitetura, teremos um desafio de arquitetura mais pra frente
* api não precisa ser testada

### Arquitetura esperada

```
project
│   README.md
│   .nycrc.json
│   package.json
│
└───src
│   │   app.js
|   |
|   |___api
|   |   |   index.js
│   │
│   └───repository
│   │   │   teamRepository.js
│   │
│   └───service
│       │   teamService.js
│
└───test
│   └───e2e
│   │   │   api.test.js
│   │
│   └───mocks
│   │   │   valid-team.json
│   │   │   ...
│   │
│   └───unit
│       │   teamRepository.test.js
│       │   teamService.test.js
│
└───coverage
│   │   ...
```

### Entendendo a PokeAPI

URLs Úteis ao desafio:
- https://pokeapi.co/api/v2/pokemon
- https://pokeapi.co/api/v2/pokemon/7

### Checklist features

- Web API
  * [ ] Deve ter uma rota raiz usada como _fallback_.
  * [ ] Deve ter uma rota de `/team`, onde:
    * [ ] Deve consumir a PokeAPI e selecionar 3 pokemóns aleatórios
    * [ ] Deve consumir a PokeAPI para obter mais informações sobre os pokemóns escolhidos
    * [ ] Deve retornar um objeto JSON conetendo um array com 3 pokemóns, cada um com seus respectivos `name (String)` e `moves (String[])`

- Testes
  * [ ] Deve ter cobertura de testes end-2-end e unitários
  * [ ] 100% de code coverage

## Submissão

1. Inicialize um repósitório git com um arquivo README.md contendo seu nome, quais tópicos do checklist foram implementados e, caso queira, um breve resumo de cada tópico.

2. Crie o projeto e os testes.

3. Coloque as instruções de como configurar e executar seu projeto e os testes no README.md (não se esqueça do coverage com o `nyc`).

4. Envie o link no canal `#desafios-jsexpert` da nossa comunidade no discord.
