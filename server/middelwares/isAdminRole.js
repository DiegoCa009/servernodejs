const { response } = require("express");
const { compareSync } = require("bcryptjs");

const isAdminRole= async(req, res, next)=>{
    const {email, password} = req.body;
    
     const validatePassword = compareSync(password, user.password);
        if(!validatePassword) res.status(400).json({error: `invalid password`})
        
        res.json(user)
}




module.exports = {isAdminRole};