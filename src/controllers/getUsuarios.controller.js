const pool = require('../database')

async function getUsuarios(req, res){
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.send(result.rows); 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar la base de datos');
    }
}

module.exports = getUsuarios

