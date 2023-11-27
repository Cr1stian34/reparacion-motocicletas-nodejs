

// controladores es decir funciones para cada metodo http 
const UsersService = require("./users.services")

//Funcion para el metodo get para obtener todas las enfermedades 
const findAll = async (req, res) => {

    const users = await UsersService.findAll()

    return res.json({
        message: "Metodo findAll users",
        users
    })
}

//Funcion para el metodo post para poder crear un usuario

const create = async (req, res) => {
    const { name, email, password, role, status } = req.body

    const users = await UsersService.findAll()

    const nombres = users.filter((nombre) => nombre.dataValues.name === name)
    const correos = users.filter((correo) => correo.dataValues.email === email)

    if (nombres.length === 0 && correos.length === 0) {
        const users = await UsersService.create({ name, email, password, role, status })

        return res.json({
            message: "Metodo post o create",
            users
        })
    } else {
        return res.json({
            status: "error",
            message: `El usuario con el nombre ${name} y correo: ${email} ya existen en la base de datos`
        })
    }

}

//Fucion para la ruta get y poder obtener un solo usuario

const findOne = async (req, res) => {
    const { id } = req.params
    const user = await UsersService.findOne(id)

    if (!user) {
        return res.json({
            status: "error",
            message: `Usuario con el id: ${id} no existe`
        })
    }
    return res.json({
        message: "Metodo get para el findOne",
        user
    })
}

//Funcion para la ruta put y poder actualizar un usuario

const updateOne = async (req, res) => {
    const { id } = req.params
    const { name, email } = req.body
    const user = await UsersService.findOne(id)

    if (!user) {
        return res.json({
            status: "error",
            message: `Usuario con el id: ${id} no existe`
        })
    }

    const userUpdate = await UsersService.update(user, { name, email })

    return res.json({
        message: "Metodo put para actualizar",
        userUpdate
    })
}

//Funcion para la ruta delete y poder eleminar un usuario

const deleteOne = async (req, res) => {
    const { id } = req.params
    const user = await UsersService.findOne(id)

    if (!user) {
        return res.json({
            status: "error",
            message: `Usuario con el id: ${id} no existe`
        })
    }

    await UsersService.delete(user)

    return res.status(204).json(null)
}

module.exports = {
    findAll,
    create,
    findOne,
    updateOne,
    deleteOne
}