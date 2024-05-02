const { searchPokemon, pokemonDetails } = require("../router");

const router = ({ app }) => {
  app.use(searchPokemon);
  app.use(pokemonDetails);
};

module.exports = router;