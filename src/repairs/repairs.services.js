const Repairs = require("./repairs.model")

class RepairsService {

    static async create(data) {
        return await Repairs.create(data)
    }

    static async findAll() {
        return await Repairs.findAll({
            where: {
                status: "pending"
            }
        })
    }

    static async findOne(id) {
        return await Repairs.findOne({
            where: {
                id: id
            }
        })
    }

    static async update(repair, data) {
        return await repair.update(data)
    }

    static async delete(repair) {
        return await repair.update({
            status: "cancelled"
        })
    }
}

module.exports = RepairsService