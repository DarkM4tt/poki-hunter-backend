const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

router.get("/search-pokemon", async (req, res) => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1');
    res.json(res.data);
});

module.exports = router