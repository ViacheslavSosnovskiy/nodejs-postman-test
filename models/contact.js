const { Schema, model } = require("mongoose")
const Joi = require("joi")

const {handleMongooseError} = require("../helpers")

const validateList = ["fantastic", "love"]
const dataRegexp = /^\d{2}-\d{2}-\d{4}$/

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    // genre: {
    //     type: String,
    //     required: true,
    //     enum: validateList,
    // },
    // data: {
    //     type: String,
    //     match: dataRegexp,
    //     required: true,
    // }
}, {versionKey: false, timestamps: true})

contactSchema.post("save", handleMongooseError)

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    // favorite: Joi.string().valid(...validateList).required(),
    // data: Joi.string().pattern(dataRegexp).required()
})

const schemas = {
    addSchema,
}

const Contact = model("contact", contactSchema)

module.exports = {
    Contact,
    schemas
}