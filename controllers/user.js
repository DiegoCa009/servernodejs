const { response, request } = require("express");




const usersGet = (req = request, res = response)=>{
    res.json({server: 'serverside'})
}


const usersPost = (req = request, res = response)=>{
    res.json({server: 'post method'})
}



module.exports = {usersGet, usersPost};


