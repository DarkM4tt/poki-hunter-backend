const express = require('express');
const router = express.Router();

router.get("/pokimon", (req, res) => {
    res.json({})
});

module.exports = router