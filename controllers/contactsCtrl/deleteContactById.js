const {Contact} = require("../../models/contact")
const {HttpError} = require("../../helpers")

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

module.exports = deleteContactById