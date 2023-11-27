
const RepairsService = require("./repairs.services")

//funcion para el metodo get y obtener todas los repairs

const findAll = async (req, res) => {

    const repairs = await RepairsService.findAll()
    return res.json({
        message: "metodo findAll repairs",
        repairs
    })
}

//funcion para el metodo post y poder crear un repairs

const create = async (req, res) => {

    const { date, userId } = req.body
    const repairs = await RepairsService.create({ date, userId })
    return res.json({
        message: "metodo create",
        repairs
    })
}

//funcion para el metodo get y obtener un repair
const findOne = async (req, res) => {

    const { id } = req.params

    const repair = await RepairsService.findOne(id)

    if (repair.dataValues.status !== "pending") {
        return res.json({
            status: "error",
            message: `La raparacion con el id: ${id} tiene un status: ${repair.dataValues.status}`
        })
    } else {
        return res.json({
            message: "metodo findOne",
            repair
        })
    }

}

//funcion para el metodo put y actualizar un repair
const updateOne = async (req, res) => {

    const { id } = req.params
    const { status } = req.body
    const repair = await RepairsService.findOne(id)

    if (repair.dataValues.status !== "pending") {
        return res.json({
            status: "error",
            message: `La reparacion con el id: ${id} tiene un status: ${repair.dataValues.status}`
        })
    }

    const repairUpdate = await RepairsService.update(repair, { status })

    return res.json({
        message: "metodo updateOne",
        repairUpdate
    })
}

//funcion para el metodo delete y elemininar un repair
const deleteOne = async (req, res) => {

    const { id } = req.params
    const repair = await RepairsService.findOne(id)

    if (repair.dataValues.status === "completed") {
        return res.json({
            status: "error",
            message: `La reparacion con el id: ${id} tiene un status: ${repair.dataValues.status}`
        })
    }

    await RepairsService.delete(repair)
    return res.status(204).json(null)
}

module.exports = {
    findAll,
    findOne,
    create,
    updateOne,
    deleteOne
}