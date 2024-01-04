const express = require("express")

const {validateBody} = require("../../middlewares")
const {schemas} = require("../../models/user")
const controllerAuth = require("../../controllers/auth")

const router = express.Router()

router.post("/register", validateBody(schemas.registerSchema), controllerAuth.register)

module.exports = router