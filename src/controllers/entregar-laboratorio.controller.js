const getALlEntrega = async (req, res) => {
    res.send('Retrieving a list of Entregas');
}
const getEntrega = async (req, res) => {
    res.send('Retrieving a single Entrega');
}
const createEntrega = async (req, res) => {
    res.send('Creating a new entrega');
}
const deleteEntrega = async (req, res) => {
    res.send('Deleting Entrega');
}
const updateEntrega = async (req, res) => {
    res.send('Updating Entrega');
}

module.exports = {
    getALlEntrega,
    getEntrega,
    createEntrega,
    deleteEntrega,
    updateEntrega
}