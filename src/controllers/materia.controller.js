const pool = require('../db')


//listar las materias
const getAllMateria = async (req, res, next) => {
    try {
        const allMaterias = await pool.query('SELECT * FROM materia')

        res.json(allMaterias.rows)

    } catch (error) {
        next(error);
    }
}

//obtener una materia por id
const getMateria = async (req, res, next) => {

    try {
        const { id_materia } = req.params
        const result = await pool.query('SELECT * FROM materia WHERE id_materia = $1', [id_materia]);


        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Materia no encontrada',
            });

        return res.json(result.rows[0]);

    } catch (error) {
        next(error);
    }




}

//crear una materia
const createMateria = async (req, res, next) => {
    const { nombre_materia } = req.body;
    try {
        const result = await pool.query("INSERT INTO materia (nombre_materia ) VALUES ($1) RETURNING*",
            [nombre_materia]
        );

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

//eliminar una materia por id
const deleteMateria = async (req, res, next) => {
    const { id_materia } = req.params
    try {
        const result = await pool.query('DELETE FROM materia WHERE id_materia = $1 RETURNING*',
            [id_materia])

        if (result.rowCount === 0)
            return res.status(404).json({
                message: "materia no encontrada"
            });
        return res.sendStatus(204);

    } catch (error) {
        next(error);
    }

}


//actualizar una materia
const updateMateria = async (req, res, next) => {
    try {
        const { id_materia } = req.params;
        const { nombre_materia } = req.body;

        const result = await pool.query(
            'UPDATE materia SET nombre_materia = $1 WHERE id_materia = $2 RETURNING* ',
            [nombre_materia, id_materia]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'materia no encontrada',
            });
        return res.json(result.rows[0]);

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllMateria,
    getMateria,
    createMateria,
    deleteMateria,
    updateMateria
}