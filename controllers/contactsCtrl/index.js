const {ctrlWrapper} = require("../../helpers")

const getAll = require("./getAll")
const getContactById = require("./getContactById")
const addContact = require("./addContact")
const deleteContactById = require("./deleteContactById")
const updateContact = require("./updateContact")


module.exports = {
    getAll: ctrlWrapper(getAll),
    getContactById: ctrlWrapper(getContactById),
    addContact: ctrlWrapper(addContact),
    deleteContactById: ctrlWrapper(deleteContactById),
    updateContact: ctrlWrapper(updateContact),
}