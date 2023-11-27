const { DataTypes } = require("sequelize")
const { sequelize } = require("./../config/database/database")

//Se genera la tabla para la base de datos 

const Users = sequelize.define("users", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM("available", "disabled"),
        allowNull: false,
        defaultValue: "available"
    }

})

module.exports = Users