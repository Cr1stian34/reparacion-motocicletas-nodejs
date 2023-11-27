const { Sequelize } = require("sequelize")
const { envs } = require("../enviroments/enviroments")

const sequelize = new Sequelize(envs.DB_URL, {
    logging: false
})

const authenticated = async () => {
    try {
        await sequelize.authenticate();
        console.log("Se a autenticado satisfactoriamente :)")
    } catch (error) {
        console.log(error)
    }
}

const syncUp = async () => {
    try {
        await sequelize.sync();
        console.log("La conecion se sincronizo satisfactoriamente ;)")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    authenticated,
    syncUp,
    sequelize
}
