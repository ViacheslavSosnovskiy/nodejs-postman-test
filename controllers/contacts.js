const contacts = require("../contacts/index")
const { HttpError } = require("../helpers")
const { ctrlWrapper } = require("../helpers/ctrlWrapper")
const schema = require("../schemas/contactsSchema")

const getAll = async (req, res) => {
    const result = await contacts.getAll()
    res.json(result)
}

const getContactById = async (req, res, next) => {
        const {id} = req.params
        const result = await contacts.getById(id)
        if(!result) {
            throw HttpError(404, "Not found")
        }
        res.json(result)
}

const addContact = async (req, res, next) => {
        const {error} = schema.addSchema.validate(req.body)
        if(error) {
            throw HttpError(400, error.message)
        }

        const result = await contacts.addContact(req.body)
        res.status(201).json(result)
}

const deleteContactById = async (req, res, next) => {
        const {id} = req.params
        const result = await contacts.deleteById(id)
        if(!result) {
            throw HttpError(404, "Not found")
        }
        res.json({
            message: "Successful removal"
        })
}

const updateContact = async (req, res, next) => {
        const {error} = schema.addSchema.validate(req.body)
        if(error) {
            throw HttpError(400, error.message)
        }
        const {id} = req.params
        const result = await contacts.updateById(id, req.body)
        if(!result) {
            throw HttpError(400, error.message)
        }
        res.json(result)
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    deleteContactById: ctrlWrapper(deleteContactById),
    updateContact: ctrlWrapper(updateContact),
}


// ==============================
// const getAll = async (req, res) => {
//     try {
//      const result = await contacts.getAll()
//      res.json(result)
//     } catch (error) {
//          res.status(500).json({
//              message: "Server error"
//          })
//     }
// }

// const getContactById = async (req, res, next) => {
//     try {
//         const {id} = req.params
//         const result = await contacts.getById(id)
//         if(!result) {
//             throw HttpError(404, "Not found")
//         }
//         res.json(result)
//     } catch (error) {
//         next(error)
//     }
// }

// const addContact = async (req, res, next) => {
//     try {
//         const {error} = addSchema.validate(req.body)
//         if(error) {
//             throw HttpError(400, error.message)
//         }

//         const result = await contacts.addContact(req.body)
//         res.status(201).json(result)
//     } catch (error) {
//         next(error)
//     }
// }

// const deleteContactById = async (req, res, next) => {
//     try {
//         const {id} = req.params
//         const result = await contacts.deleteById(id)
//         if(!result) {
//             throw HttpError(404, "Not found")
//         }
//         res.json({
//             message: "Successful removal"
//         })
//     } catch (error) {
//         next(error)
//     }
// }

// const updateContact = async (req, res, next) => {
//     try {
//         const {error} = addSchema.validate(req.body)
//         if(error) {
//             throw HttpError(400, error.message)
//         }
//         const {id} = req.params
//         const result = await contacts.updateById(id, req.body)
//         if(!result) {
//             throw 
//         }
//         res.json(result)
//     } catch(error) {
//         next(error)
//     }
// }