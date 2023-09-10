const { validationResult } = require("express-validator")
const User = require("../database/models/user")
const bcryptjs = require("bcryptjs")
const { create } = require("../helpers/token")
const { request } = require("express")



const loginPost = async (req = request, res) =>{
    const {password} = req.body;
    const user = await User.findById(req.token);

    if(!user) res.status(400).json({error: `user not found`})

    const validatePassword = bcryptjs.compareSync(password, user.password);
    if(!validatePassword) res.status(400).json({error: `invalid password`})

    res.json({login: 'login succes', token: req.token})
    
}


const authGet = (req, res) =>{
    res.json({status: 'ok'})
}

module.exports = {authGet, loginPost}