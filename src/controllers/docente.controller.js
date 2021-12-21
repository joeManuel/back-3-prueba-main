const pool = require('../db')

const getAllDocentes = async (req, res) => {
    res.send('Retrieving a list of docentes');
}

//usuario por id
const getDocente = async (req, res) => {
    res.send('Retrieving a single Docente');
}


//crear un docente (Registrarse)
const createDocente = async (req, res, next) => {
    try {
        const {
            nombre_docente,
            apellido_docente,
            telefono_docente,
            correo_docente,
            nombre_usuario,
            contrasena_usuario


        } = req.body;

        const result = await pool.query("INSERT INTO docente (nombre_docente, apellido_docente, telefono_docente, correo_docente, nombre_usuario, contrasena_usuario) VALUES ($1,$2,$3, $4, $5, $6) RETURNING*",
            [nombre_docente, apellido_docente, telefono_docente, correo_docente, nombre_usuario, contrasena_usuario]
        );

        res.json(result.rows[0])
    } catch (error) {
        next(error);
    }

}

const deleteDocente = async (req, res) => {
    res.send('Deleting a docente');
}
const updateDocente = async (req, res) => {
    res.send('Updating docente');
}


module.exports = {
    getAllDocentes,
    getDocente,
    createDocente,
    deleteDocente,
    updateDocente
}