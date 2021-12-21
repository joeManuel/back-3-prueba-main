const { Router } = require('express');
const {
    login,
    getAllUsuario
} = require('../controllers/login.controller')

const router = Router();

router.post('/login', login)
router.get('/login', getAllUsuario)



module.exports = router;