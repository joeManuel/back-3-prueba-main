const getAllReserva = async (req, res) => {
    res.send('Retrieving a list of Reserva');
}
const getReserva = async (req, res) => {
    res.send('Retrieving a single reserva');
}
const createReserva = async (req, res) => {
    res.send('Creating a new Reserva');
}
const deleteReserva = async (req, res) => {
    res.send('Deleting reserva');
}
const updateReserva = async (req, res) => {
    res.send('Updating reserva');
}

module.exports = {
    getAllReserva,
    getReserva,
    createReserva,
    deleteReserva,
    updateReserva
}