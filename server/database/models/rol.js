const { Schema, model } = require("mongoose");

const role = new Schema({
    rol: String
})


module.exports = model('Role', role);