const { Router } = require('express');
const {
    
    getAllUsuario,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario
} = require('../controllers/usuario.controller')

const router = Router();


router.get('/usuario', getAllUsuario)
router.get('/usuario/:id_usuario', getUsuario)
router.post('/usuario', createUsuario)
router.delete('/usuario/:id_usuario', deleteUsuario)
router.put('/usuario/:id_usuario', updateUsuario)



module.exports = router;