const getAllObservacion = async (req, res) => {
    res.send('Retrieving a list of observaciones');
}
const getObservacion = async (req, res) => {
    res.send('Retrieving a single Observacion');
}
const createObservacion = async (req, res) => {
    res.send('Creating a new observacion');
}
const deleteObservacion = async (req, res) => {
    res.send('Deleting Observacion');
}
const updateObservacion = async (req, res) => {
    res.send('Updating observacion');
}

module.exports = {
    getAllObservacion,
    getObservacion,
    createObservacion,
    deleteObservacion,
    updateObservacion
}