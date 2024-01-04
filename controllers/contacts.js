const {Contact} = require("../models/contact")
const { HttpError, ctrlWrapper } = require("../helpers")

const getAll = async (req, res) => {
    const result = await Contact.find({}, "-createdAt -updatedAt")
    res.json(result)
}

const getContactById = async (req, res, next) => {
        const {id} = req.params
        const result = await Contact.findOne({_id: id})
        // const result = await Contact.findById(id)
        if(!result) {
            throw HttpError(404, "Not found")
        }
        res.json(result)
}

const addContact = async (req, res, next) => {
        const result = await Contact.create(req.body)
        res.status(201).json(result)
}

const deleteContactById = async (req, res, next) => {
        const {id} = req.params
        const result = await Сontact.findByIdAndRemove(id)
        if(!result) {
            throw HttpError(404, "Not found")
        }
        res.json({
            message: "Successful removal"
        })
}

const updateContact = async (req, res, next) => {
        const {id} = req.params
        // {new: true} --- it's shows us updated contact in postman
        const result = await Contact.findByIdAndUpdate(id, req.body, {new: true})
        if(!result) {
            throw HttpError(400, error.message)
        }
        res.json({
            message: "You successfull deleted"
        })
}
// это метод patch - обовляет в объекте только одно поле
const updateFavorite = async (req, res) => {
    const {id} = req.params
    const result = await Contact.findByIdAndUpdate(id, req.body, {new: true})
    if(!result) {
        throw HttpError(404, "Not found")
    }
    res.json(result)
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    deleteContactById: ctrlWrapper(deleteContactById),
    updateContact: ctrlWrapper(updateContact),
    // updateFavorite: ctrlWrapper(updateFavorite),
}