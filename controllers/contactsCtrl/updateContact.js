const {Contact} = require("../../models/contact")
const {HttpError} = require("../../helpers")

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

module.exports = updateContact