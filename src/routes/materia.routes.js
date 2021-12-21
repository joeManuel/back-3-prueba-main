const { Router } = require('express');

const {
    getAllMateria,
    getMateria,
    createMateria,
    deleteMateria,
    updateMateria
} = require('../controllers/materia.controller');

const router = Router();

router.get('/materia', getAllMateria)
router.get('/materia/:id_materia', getMateria)
router.post('/materia', createMateria)
router.delete('/materia/:id_materia', deleteMateria)
router.put('/materia/:id_materia', updateMateria)


module.exports = router;