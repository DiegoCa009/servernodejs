const { response, request } = require("express");
const User = require("../database/models/user");
const bcryptjs = require("bcryptjs");
const { create } = require("../helpers/token");




const usersGet = (req = request, res = response)=>{
    res.json({server: 'serverside'})
}


const usersDelete = (req, res)=>{
    const {email} = req.body
}


const usersPost = async(req = request, res = response)=>{
    const {...data} = req.body;

    const exists = await User.exists({email: data.email});

    if(!!exists){
        return res.json({msg: `el ${data.email} ya se encuentra registrado`})
    }
    

    const salt = bcryptjs.genSaltSync(10);
    const newPassword = bcryptjs.hashSync(data.password, salt)
    data.password = newPassword;
    try{
        
        const user = new User(data);
        await user.save();
        const token = await create(user._id);
        res.status(200).json({user,token})

    }
    catch(error){
        console.error(error);
        res.status(500).json({user: 'internal error'})
    }


}



module.exports = {usersGet, usersPost, usersDelete};


