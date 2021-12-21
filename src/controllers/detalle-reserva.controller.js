const getAllDetalle = async (req, res) => {
    res.send('Retrieving a list of Detalles');
}
const getDetalle = async (req, res) => {
    res.send('Retrieving a single Detalle');
}
const createDetalle = async (req, res) => {
    res.send('Creating a new detalle');
}
const deleteDetalle = async (req, res) => {
    res.send('Deleting detalle');
}
const updateDetalle = async (req, res) => {
    res.send('Updating Detalle');
}

module.exports = {
    getAllDetalle,
    getDetalle,
    createDetalle,
    deleteDetalle,
    updateDetalle
}