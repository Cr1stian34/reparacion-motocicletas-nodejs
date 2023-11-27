require("dotenv").config()

const env = require("env-var")

const envs = {
    PORT: env.get("PORT").required().asPortNumber(),
    DB_URL: env.get("DB_URL").required().asString()
}

module.exports = {
    envs
}