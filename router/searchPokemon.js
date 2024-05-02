const { default: axios } = require('axios');
const express = require('express');
const pokemonListCache = require('../middleware/pokemonListCache');
const router = express.Router();

router.get("/search-pokemon", pokemonListCache, async (req, res) => {
    const pokemonData = req.pokemonList;
    res.json(pokemonData);
});

module.exports = router