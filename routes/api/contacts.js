const express = require("express")

const controllers = require("../../controllers/contactsCtrl")
const {schema} = require("../../models/contact")
const {validateBody} = require("../../middlewares")
const {isValidId} = require("../../middlewares")
const {authenticate} = require("../../middlewares")

const router = express.Router()

router.get("/", authenticate, controllers.getAll)

router.get("/:id", authenticate, isValidId, controllers.getContactById)

router.post("/", authenticate, validateBody(schema), controllers.addContact)

router.delete("/:id", authenticate, isValidId, controllers.deleteContactById)

router.put("/:id", authenticate, isValidId, validateBody(schema), controllers.updateContact)

router.patch("/:id", authenticate, isValidId, validateBody(schema))

module.exports = router