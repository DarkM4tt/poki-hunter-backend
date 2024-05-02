const { searchPokemon } = require("../router");

const router = ({ app }) => {
  app.use(searchPokemon);
};

module.exports = router;