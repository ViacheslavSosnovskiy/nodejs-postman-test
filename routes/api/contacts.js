const express = require("express")
const controllers = require("../../controllers/contacts")
const {schema} = require("../../models/contact")
const {validateBody} = require("../../middlewares")
const {isValidId} = require("../../middlewares")

const router = express.Router()

router.get("/", controllers.getAll)

router.get("/:id", isValidId, controllers.getContactById)

router.post("/", validateBody(schema), controllers.addContact)

router.delete("/:id", isValidId, controllers.deleteContactById)

router.put("/:id", isValidId, validateBody(schema), controllers.updateContact)

router.patch("/:id", isValidId, validateBody(schema))

module.exports = router