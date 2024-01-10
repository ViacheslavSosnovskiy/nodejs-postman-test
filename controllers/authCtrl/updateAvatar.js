const fs = require("fs/promises")
const path = require("path")

const userAvatarDir = path.join(__dirname, "../", "public", "user", "avatar")

const updateAvatar = async (req, res) => {
    const {_id} = req.user
    const {path: tempUpload, originalname} = req.file
    const fileName = `${_id}_${originalname}`
    const resultUpload = path.join(userAvatarDir, fileName)
    await fs.rename(tempUpload, resultUpload)
    const avatarURL = path.join("user", "avatar", fileName)
    await User.findByIdAndUpdate(_id, {avatarURL})

    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar


