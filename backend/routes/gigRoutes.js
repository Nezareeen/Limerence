const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Gig route working' });
});

module.exports = router;
