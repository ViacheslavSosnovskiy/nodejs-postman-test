const gravatar = require("gravatar")
const bcrypt = require("bcrypt")
// const path = require("path")

// const userAvatarDir = path.join(__dirname, "../", "public", "user", "avatar")

const {User} = require("../../models/user")
const {HttpError} = require("../../helpers")

const register = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    //  --- we can move the avatar from ./temp to ./public/user/avatar ---
    console.log("req.file ---> ", req.file)
    // const {path: tempUpload, originalname} = req.file
    // const createNewPath = path.join(userAvatarDir, originalname)
    // await fs.rename(tempUpload, createNewPath)
    const avatarURL = gravatar.url(email)

    if(user) {
        throw HttpError(409, "The email already in use")
    }

    const createHashPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({...req.body, password: createHashPassword, avatarURL})

    res.status(201).json({
        name: newUser.name,
        email: newUser.email,
    })
}

module.exports = register