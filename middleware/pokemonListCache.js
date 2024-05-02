const axios = require('axios');

let pokemonList = null;
let cacheTimestamp = 0;

const pokemonListCache = async (req, res, next) => {
  if (req.method === 'GET') {
    if (!pokemonList || Date.now() - cacheTimestamp > 3600000) {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1');
        pokemonList = response.data.results;
        cacheTimestamp = Date.now();
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    }
    req.pokemonList = pokemonList;
  }
  next();
};

module.exports = pokemonListCache;