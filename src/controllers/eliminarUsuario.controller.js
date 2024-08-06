const pool = require('../database');

async function eliminarUsuario(req, res) {
  const { id } = req.params;
  try {
    const user = await pool.connect();
    const result = await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
    if(result.rowCount > 0) {
      res.json({ message: "Usuario eliminado con éxito" });
      user.release();
    } else {
      res.status(404).json({ message: "Usuario con ese id no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el usuario");
  }
}

module.exports = eliminarUsuario;
