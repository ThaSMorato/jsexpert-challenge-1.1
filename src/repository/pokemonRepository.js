const PokemonApi = require('../api');

class PokemonRepository {
  constructor() {
    this.api = new PokemonApi();
  }
}

module.exports = PokemonRepository;
