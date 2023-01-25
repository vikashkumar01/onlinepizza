const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }

},{
    timestamp:true,
});

userSchema.pre("save",async function(next) {
    if(this.isModified("password")) {
        this.password= await bcrypt.hash(this.password,10);
    }
   next();
})

userSchema.methods.matchPassword = async function (password){
  return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateToken = function() {

    return jwt.sign({_id:this._id},process.env.JWT_SECRET);
}

const userModel = mongoose.model('users',userSchema)

module.exports = userModel;