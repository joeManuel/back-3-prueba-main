const { Router } = require('express');
const { getAllPractica, getPractica, createPractica, deletePractica, updatePractica } = require('../controllers/practica.controller')

const router = Router();

router.get('/practica', getAllPractica)

router.get('/practica/10', getPractica)

router.post('/practica', createPractica)

router.delete('/practica', deletePractica)

router.put('/practica', updatePractica)



module.exports = router;