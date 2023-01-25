
const  User  = require('../models/user');

const getMyProfile = async (req, res) => {

    try {
        const user = await User.findById(req.user._id)
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json({success: false,message:err.message});
    }
}


const logout = async (req, res) => {

    try {
        res.status(200).cookie("token", null, { expires: new Date(Date.now()), httpOnly: true }).json({ success: true, message: "Log Out" })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {getMyProfile, logout }