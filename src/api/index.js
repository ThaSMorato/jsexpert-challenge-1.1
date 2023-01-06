const API_BASE_URL = 'https://pokeapi.co/api/v2';

class PokemonApi {
  async get(url) {
    const chunks = [];
    return new Promise((resolve, reject) => {
      https.get(`${API_BASE_URL}/${url}`, response => {
        response.on('data', data => {
          chunks.push(data);
        });
        response.on('error', reject);
        response.on('end', () => {
          const data = Buffer.concat(chunks);
          resolve(JSON.parse(data));
        });
      });
    });
  }
}

module.exports = PokemonApi;
