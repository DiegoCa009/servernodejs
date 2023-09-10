const { Schema, model } = require("mongoose");

const user = new Schema({
    email:{
        type: String,
        required: true
    },  

    password:{
        type: String,
        required: true
    },

    estado: {
        type: Boolean,
        default: true
    },

    google:{
        type: Boolean,
        default: false
    },

    rol:{
        type: String,
        default: 'USER_ROL',
    }
})

// user.methods.toJSON = function(){
//     const {__v, _id, password,...user} = this.toObject();
//     user.uid = _id;
//     return user;
// }

module.exports = model('User', user);