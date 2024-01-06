const express = require("express")

const {validateBody, authenticate} = require("../../middlewares")
const {schemas} = require("../../models/user")
const controllerAuth = require("../../controllers/auth")

const router = express.Router()

router.post("/register", validateBody(schemas.registerSchema), controllerAuth.register)

router.post("/login", validateBody(schemas.loginSchema), controllerAuth.login)

router.get("/current", authenticate, controllerAuth.getCurrent)

router.post("/logout", authenticate, controllerAuth.logout)

module.exports = router