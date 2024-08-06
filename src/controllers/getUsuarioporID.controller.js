const pool = require('../database')

async function getUsuariosByID(req, res){
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
       if(result.rowCount > 0){
            res.json(result.rows[0]);
       } else {
        res.status(404).json({message: 'Usuario no encontrado'});
       } 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar la base de datos');
    }
}

module.exports = getUsuariosByID