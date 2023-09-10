const User = require("../database/models/user");

const userExists = async(req,res,next)=>{
    const {email} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(404).json({msg: 'not found'})
    
    res.json(user);
}
module.exports = {userExists}