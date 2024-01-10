const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {HttpError} = require("../../helpers")
const {User} = require("../../models/user")

const {SECRET_KEY} = process.env

const login = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user) {
        throw HttpError(401, "The email or password are invalid")
    }

    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword || !user.email) {
        throw HttpError(401, "The email or password are invalid")
    }

    const payload = {
        id: user._id
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"})

    await User.findByIdAndUpdate(user._id, {token})
    // .exec();

    res.json({
        token,
        user: {
            email: user.email,
            // subscription: user.subscription,
        },
        message: `Authorization was successful: ${user.name}`
    })
}

module.exports = login