const pool = require('../db/db');

const getJoyas = async (limits = 10, page = 1, order_by = 'id_ASC') => {
    try {
        const offset = (page - 1) * limits;
        const [field, direction] = order_by.split('_');
        const query = `SELECT * FROM inventario ORDER BY ${field} ${direction} LIMIT $1 OFFSET $2`;
        const { rows } = await pool.query(query, [limits, offset]);

        const results = rows.map((joya) => ({
            ...joya,
            links: {
                self: `/joyas/${joya.id}`,
                filtros: `/joyas/filtros?precio_max=${joya.precio}&precio_min=${joya.precio}&categoria=${joya.categoria}&metal=${joya.metal}`
            }
        }));

        return {
            joyas: results,
            total: rows.length,
            page,
            limits,
            order_by
        };
    } catch (error) {
        throw new Error(`Error al obtener las joyas: ${error.message}`);
    }
};

const getJoyasFiltradas = async (precio_max, precio_min, categoria, metal) => {
    try {
        const query = `SELECT * FROM inventario WHERE precio <= $1 AND precio >= $2 AND categoria = $3 AND metal = $4`;
        const { rows } = await pool.query(query, [precio_max, precio_min, categoria, metal]);

        const results = rows.map((joya) => ({
            ...joya,
            links: {
                self: `/joyas/${joya.id}`,
                filtros: `/joyas/filtros?precio_max=${joya.precio}&precio_min=${joya.precio}&categoria=${joya.categoria}&metal=${joya.metal}`
            }
        }));

        return {
            joyas: results,
            total: rows.length,
            precio_max,
            precio_min,
            categoria,
            metal
        };
    } catch (error) {
        throw new Error(`Error al filtrar las joyas: ${error.message}`);
    }
};

module.exports = { getJoyas, getJoyasFiltradas };

// se implementa el HATEOAS