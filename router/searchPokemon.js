const { default: axios } = require('axios');
const express = require('express');
const pokemonListCache = require('../middleware/pokemonListCache');
const router = express.Router();

router.get("/search-pokemon", pokemonListCache, async (req, res) => {
    const { s = "" } = req.query;
    const pokemonList = req.pokemonList;

    const filteredPokemon = pokemonList.filter(pokemon => {
        return pokemon?.name.toLowerCase().includes(s.toLowerCase());
    });

    res.json(filteredPokemon);
});

module.exports = router