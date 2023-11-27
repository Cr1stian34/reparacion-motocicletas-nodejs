//1. exportar expres

const express = require("express")

const users = require("./users/users.route")
const repairs = require("./repairs/repairs.route")
//2. Crea una constante app que tendra todas las fucionalidades


const app = express();


//Utilizar los midelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/users", users)
app.use("/api/v1/repairs", repairs)

module.exports = app;