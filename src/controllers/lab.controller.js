const getAllLabs = async (req, res) => {
    res.send('Retrieving a list of laboratories');
}


const getLab = async (req, res) => {
    res.send('Retrieving a  single laboratory');
}


const createLab = async (req, res) => {
    res.send('Creating a new laboratory');
}

const deleteLab = async (req, res) => {
    res.send('Deleting a laboratory');
}

const updateLab = async (req, res) => {
    res.send('Updating laboratory');
}

module.exports = {
    getAllLabs,
    getLab,
    createLab,
    deleteLab,
    updateLab
}