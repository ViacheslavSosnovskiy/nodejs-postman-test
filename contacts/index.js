const fs = require("fs/promises")
const path = require("path")

const contactsPath = path.join(__dirname, "contacts.json")

const getAll = async () => {
    const data = await fs.readFile(contactsPath)
    return JSON.parse(data)
}

const getById = async (id) => {
    const contacts = await getAll()
    const result = contacts.find(contact => contact.id === id)
    return result || null
}

const addContact = async (data) => {
    const contacts = await getAll()
    const newContact = {
        id: Date.now(),
        ...data
    }
    contacts.push(newContact)
    await fs.writeFile(booksPath, JSON.stringify(contacts, null, 2))
    return newBook
}

const updateById = async (id, data) => {
    const contacts = await getAll()
    const index = contacts.findIndex(contact => contact.id === id)
    if(index !== -1) {
        return null
    }
    contacts[index] = {id, ...data}
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return contacts[index]
}

const deleteById = async (id) => {
    const contacts = await getAll()
    const index = contacts.findIndex(contact => contact.id === id)
    if(index === -1) {
        return null
    }
    const [result] = books.splice(index, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return result
}

module.exports = {
    getAll,
    getById,
    addContact,
    updateById,
    deleteById
}