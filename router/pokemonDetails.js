const express = require('express');
const axios = require('axios');
const router = express.Router();

const cache = {};
const cacheExpiry = 3600; 
const maxCacheEntries = 100;

function cleanupCache() {
    const now = Date.now();
    const cacheKeys = Object.keys(cache);
    if (cacheKeys.length > maxCacheEntries) {
        const oldestKeys = cacheKeys.sort((a, b) => cache[a].timestamp - cache[b].timestamp).slice(0, cacheKeys.length - maxCacheEntries);
        oldestKeys.forEach(key => delete cache[key]);
    }
    cacheKeys.forEach(key => {
        if (now - cache[key].timestamp > cacheExpiry * 1000) {
            delete cache[key];
        }
    });
}

router.get("/pokemon-details", async (req, res) => {
    const { s = "" } = req.query;

    try {
        let pokemon;

        cleanupCache();

        if (cache[s]) {
            pokemon = cache[s].data;
        } else {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${s.toLocaleLowerCase()}/`);
            pokemon = response.data;

            cache[s] = {
                data: pokemon,
                timestamp: Date.now()
            };
        }

        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Pokemon details" });
    }
});

module.exports = router;