const { default: axios } = require('axios');
const express = require('express');
const pokemonListCache = require('../middleware/pokemonListCache');
const router = express.Router();

router.get("/pokemon-details", pokemonListCache, async (req, res) => {
    const { s = "" } = req.query;

    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${s.toLocaleLowerCase()}/`);
        pokemon = response.data;
        res.json(pokemon);
    }
    catch(e){
        res.status(500).json({ error: "Failed to fetch Pokemon details" });
    }
});

module.exports = router