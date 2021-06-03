const Sequelize = require('sequelize');
const json = require('../config/default.json');
const mysql = require('mysql');

var instancia = new Sequelize(
    json.mysql.database,
    json.mysql.usuario,
    json.mysql.senha,
    {
    host: json.mysql.host,
    port: json.mysql.port,
    dialect: 'mysql'
    });

module.exports = instancia;