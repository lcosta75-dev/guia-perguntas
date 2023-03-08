const Sequelize = require("sequelize")

const connection = new Sequelize('guiaperguntas', 'root', 'layguitar', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection