const getAllPractica = async (req, res) => {
    res.send('Retrieving a list of Practicas');
}
const getPractica = async (req, res) => {
    res.send('Retrieving a single practica');
}
const createPractica = async (req, res) => {
    res.send('Creating a new Practica');
}
const deletePractica = async (req, res) => {
    res.send('Deleting Practica');
}
const updatePractica = async (req, res) => {
    res.send('Updating Practica');
}


module.exports = {
    getAllPractica,
    getPractica,
    createPractica,
    deletePractica,
    updatePractica
}