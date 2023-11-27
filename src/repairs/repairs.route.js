const express = require("express");

const router = express.Router();

const { findAll, create, findOne, updateOne, deleteOne } = require("./repairs.controller")

/*********************Definir los endpoints para ser utilizados */
//metodo get para traer todos los repairs
router.get("/", findAll)

//metodo post para crear los repairs
router.post("/", create)

//metodo get para traer un repairs
router.get("/:id", findOne)

//metodo put para actualizar un repairs
router.put("/:id", updateOne)

//metodo delete para eliminar un repairs
router.delete("/:id", deleteOne)


module.exports = router