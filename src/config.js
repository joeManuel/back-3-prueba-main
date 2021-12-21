const { config } = require('dotenv')
config()

module.exports = {
    db: {

        // process.env.DB_USER
        // process.env.DB_PASSWORD
        // process.env.DB_HOST
        // process.env.DB_PORT
        // user: process.env.DB_USER,
        // process.env.DB_DATABASE
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD ,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    }
}