const express = require("express")

const {validateBody, authenticate} = require("../../middlewares")
const {schemas} = require("../../models/user")
const controllers = require("../../controllers/authCtrl")
const {upload} = require("../../middlewares")

const router = express.Router()

router.post("/register", upload.single("avatar"), validateBody(schemas.registerSchema), controllers.register)

router.post("/login", validateBody(schemas.loginSchema), controllers.login)

router.get("/current", authenticate, controllers.getCurrent)

router.post("/logout", authenticate, controllers.logout)

router.patch("/avatars", authenticate, upload.single("avatar"), controllers.updateAvatar)

module.exports = router