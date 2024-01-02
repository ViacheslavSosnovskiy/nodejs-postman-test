const express = require("express")
const fs = require("fs/promises")
const moment = require("moment")
const cors = require("cors")
require("dotenv").config()

const app = express()

const router = require("./routes/api/contacts")

app.use(cors())
app.use(express.json())

app.use("/api/contacts", router)

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

module.exports = app