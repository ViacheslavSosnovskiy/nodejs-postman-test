const express = require("express")
const contactsRouter = express.Router()
const controllers = require("../../controllers/contacts")
const schema = require("../../schemas/contactsSchema")
const {validateBody} = require("../../middlewares")

contactsRouter.get("/", controllers.getAll)

contactsRouter.get("/:id", controllers.getContactById)

contactsRouter.post("/", validateBody(schema.addSchema), controllers.addContact)

contactsRouter.delete("/:id", controllers.deleteContactById)

contactsRouter.put("/:id", validateBody(schema.addSchema), controllers.updateContact)

module.exports = contactsRouter