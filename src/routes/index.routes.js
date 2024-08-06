const pool = require('../database')
const {Router} = require('express')
const agregarUsuario = require('../controllers/agregarUsuario.controller')
const getUsuarios = require('../controllers/getUsuarios.controller')
const actualizarUsuario = require('../controllers/actualizarUsuario.controller')
const eliminarUsuario = require('../controllers/eliminarUsuario.controller')
const getUsuariosByID = require('../controllers/getUsuarioporID.controller')
const router = Router()

router.get('/getUsuario', getUsuarios)

router.post('/addUsuario', agregarUsuario)

router.put('/updateUsuario/:id', actualizarUsuario)

router.delete('/deleteUsuario/:id', eliminarUsuario)

router.get('/getUsuarioById/:id', getUsuariosByID)

module.exports = router




