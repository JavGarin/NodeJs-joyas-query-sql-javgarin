const joyasService = require('../services/joyasService');

const getJoyas = async (req, res) => {
    try {
        const { limits = 10, page = 1, order_by = 'id_ASC' } = req.query;
        const joyas = await joyasService.getJoyas(limits, page, order_by);
        res.json(joyas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getJoyasFiltradas = async (req, res) => {
    try {
        const { precio_max, precio_min, categoria, metal } = req.query;
        const joyas = await joyasService.getJoyasFiltradas(precio_max, precio_min, categoria, metal);
        res.json(joyas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getJoyas, getJoyasFiltradas };