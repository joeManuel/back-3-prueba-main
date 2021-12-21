const pool = require('../db');

const login = async (req, res, next) => {
    try {
        const { usuario_docente, contrasena_docente} = req.body;
        
        const allUsuario = await pool.query("SELECT * FROM docente where contrasena_docente = $1 and usuario_docente = $2" ,
        [contrasena_docente,
        usuario_docente]
        );
        // res.json(allUsuario.rows)
        if(allUsuario.rowCount == 0){
            res.json("usuario no existe")
        }else if(allUsuario.rowCount >= 1){
            res.json("usuario existe")
        }
        
        

    } catch (error) {
        next(error);
    }

}
const getAllUsuario = async (req, res, next) => {
    try {
        const allUsuario = await pool.query('SELECT * FROM docente')

        res.json(allUsuario.rows)

    } catch (error) {
        next(error);
    }

}

module.exports = {
    login,
    getAllUsuario
}