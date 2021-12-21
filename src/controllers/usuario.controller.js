const pool = require('../db');


// listar usuarios

const getAllUsuario = async (req, res, next) => {
    try {
        const allUsuario = await pool.query('SELECT * FROM docente')

        res.json(allUsuario.rows)

    } catch (error) {
        next(error);
    }

}
//obtener un usuario por id
//de aqui parte la logica para el login
const getUsuario = async (req, res, next) => {
    res.send('Retrieving a Usuario');
}

//crear un usuario
const createUsuario = async (req, res, next) => {
    // res.send('Creating new usuario');
    const { nombre_docente, apellido_docente, telefono_docente,
    correo_docente, usuario_docente, contrasena_docente } = req.body;
    try {
        const result = await pool.query("INSERT INTO docente ( nombre_docente, apellido_docente, "+
        "telefono_docente, correo_docente, usuario_docente, contrasena_docente ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING*",
            [nombre_docente,
            apellido_docente,
            telefono_docente,
            correo_docente,
            usuario_docente,
            contrasena_docente]
        );

        if(result.rowCount == 0){
            res.json("usuario no guardado")
        }else if(result.rowCount >= 1){
            res.json("usuario guardado")
        }
        // res.json(result.rows[0]);
       
    } catch (error) {
        next(error);
    }
}


//eliminar un usuario
const deleteUsuario = async (req, res, next) => {
    res.send('Deleting usuario');
}

//actualizar un usuario
const updateUsuario = async (req, res, next) => {
    res.send('Updating usuario');
}

module.exports = {
    getAllUsuario,
    getUsuario,
    createUsuario,
    deleteUsuario,
    updateUsuario
}