const jwt = require("jsonwebtoken");

const validateJWT = (req, res, next)=>{
    const token = req.headers['x-token'];
    
    if(!token) return res.status(401).json({msg: 'invalid token'})

    try {
        const {uid} = jwt.verify(token, process.env.SECRET);
        req.token = uid;
        next();
    } catch (error) {
        res.json(error)
    }
}



module.exports = {validateJWT};