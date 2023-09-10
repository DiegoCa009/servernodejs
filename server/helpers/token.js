const jwt = require("jsonwebtoken");

const create = (uid = '')=>{
    const payload = {uid}
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, process.env.SECRET, {expiresIn: '5d' },
        (error, token)=>
        {
            if (error) reject(error);
            else resolve(token);

        })
    })
}



module.exports = {create}