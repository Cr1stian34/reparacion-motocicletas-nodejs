const express = require("express")

//controller
const { findAll, create, findOne, deleteOne, updateOne } = require("./users.controller.js")


const router = express.Router();


//******************** Definir los endpoint a ser utlizados **************/
//metodo get para traer todos los usuarios
router.get("/", findAll)

//metodo get para agregar un usuario
router.post("/", create)

//metodo get para traer un usuario
router.get("/:id", findOne)

//metodo put para actualizar la informacion de un usuario
router.put("/:id", updateOne)

//metodo delete para eliminar un usuario
router.delete("/:id", deleteOne)


module.exports = router