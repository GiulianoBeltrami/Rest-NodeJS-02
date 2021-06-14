const Sequelize = require('sequelize')
const config = require('config')

const instancia = new Sequelize(
    "petshop",
    "root",
    "admin",
    {
        host: '127.0.0.1',
        port: 3307,
        dialect: 'mysql'
    }
)

module.exports = instancia