const pool = require('../database')

async function actualizarUsuario(req, res){
    const { id } = req.params;
    const { nombre, apellido, dni } = req.body;
    try {
        const result = await pool.query(
            'UPDATE usuario SET nombre = $2, apellido = $3, dni = $4 WHERE id = $1 RETURNING *',
            [id, nombre, apellido, dni]
        );
            if(result.rowCount > 0){
                res.json(result.rows[0]);
            } else {
                res.status(404).json({message: 'No se encontró el usuario con ese id'});
            } 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el usuario');
    }
}

module.exports = actualizarUsuario

