const express = require('express');
const axios = require('axios');
const router = express.Router();

const pokemonCache = {};

router.get("/pokemon-details", async (req, res) => {
    const { s = "" } = req.query;

    try {
        let pokemon;
        if (pokemonCache[s]) {
            pokemon = pokemonCache[s];
        } else {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${s.toLocaleLowerCase()}/`);
            pokemon = response.data;

            pokemonCache[s] = pokemon;
        }

        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Pokemon details" });
    }
});

module.exports = router;