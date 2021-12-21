const { Router } = require('express');
const {
    getAllDocentes,
    getDocente,
    createDocente,
    deleteDocente,
    updateDocente
} = require('../controllers/docente.controller')


const router = Router();


router.get('/docente', getAllDocentes)
router.get('/docetes/10', getDocente)
router.post('/docente', createDocente)
router.delete('/docente', deleteDocente)
router.put('/docente', updateDocente)

module.exports = router;