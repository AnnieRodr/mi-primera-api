const pool = require('../database')

async function agregarUsuario(req, res){
    try {
        const { nombre, apellido, dni } = req.body;
        console.log('Datos recibidos:', { nombre, apellido, dni });
        const result = await pool.query(
            'INSERT INTO usuario (nombre, apellido, dni) VALUES ($1, $2, $3) RETURNING *',
            [nombre, apellido, dni]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el usuario');
    }
}

module.exports = agregarUsuario;