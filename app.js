const express = require("express")
const fs = require("fs/promises")
const moment = require("moment")
const cors = require("cors")
const app = express()
const contactsRouter = require("./routes/api/contacts")

// awq2mhIWlCu4DZHF 

app.use(cors())

app.use("/api/contacts", contactsRouter)

app.use( async (req, res, next) => {
    const {method, url} = req
    const date = moment().format("DD-MM-YYYY_hh:mm:ss")
    await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`)
    next()
})

app.use((req, res) => {
    res.status(404).json({
        message: "Not found , try again please",
    })
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err
    res.status(status).json({ message })
})

app.listen(3001, "Server started on 3001 port")