const { Router } = require('express');
const { getALlEntrega, getEntrega, createEntrega, deleteEntrega, updateEntrega } = require('../controllers/entregar-laboratorio.controller')

const router = Router();

router.get('/entrega-lab', getALlEntrega)

router.get('/entrega-laboratorio/10', getEntrega)

router.post('/entrega-laboratorio', createEntrega)

router.delete('/entrega-laboratorio', deleteEntrega)

router.put('/entrega-laboratorio', updateEntrega)


module.exports = router;