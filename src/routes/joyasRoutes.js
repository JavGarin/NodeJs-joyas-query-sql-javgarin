const express = require('express');
const router = express.Router();
const joyasController = require('../controllers/joyasController');

router.get('/', joyasController.getJoyas);
router.get('/filtros', joyasController.getJoyasFiltradas);

module.exports = router;