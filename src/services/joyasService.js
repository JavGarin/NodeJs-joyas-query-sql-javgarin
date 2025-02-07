const pool = require('../db/db');

const getJoyas = async (limits, page, order_by) => {
    const offset = (page -1) * limits;
    const query = `SELECT * FROM inventario ORDER BY ${order_by} LIMIT $1 OFFSET $2`;
    const {rows} = await pool.query([query, offset]);
    return rows;
};

const getJoyasFiltradas = async (precio_max, precio_min, categoria, metal) => {
    const query = `SELECT * FROM inventario WHERE precio <= $1 AND precio >= $2 AND categoria = $3 AND metal = $4`;
    const { rows } = await pool.query(query, [precio_max, precio_min, categoria, metal]);
    return rows;
};

module.exports = { getJoyas, getJoyasFiltradas};