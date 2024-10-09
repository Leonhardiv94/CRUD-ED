const express = require('express');
const router = express.Router();

// Ejemplo de ruta GET
router.get('/', (req, res) => {
    res.json({ message: 'Obteniendo usuarios' });
});

module.exports = router;
