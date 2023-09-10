const { Router } = require("express");
const { check } = require("express-validator");
const {authGet, loginPost,} = require("../controllers/auth.js"); 
const { validateRequest } = require("../helpers/validations.js");
const { validateJWT } = require("../middelwares/validate-token.js");
const router = Router();



router.post('/login',[
    validateJWT,
    check('email','Email obligatorio').isEmail(),
    check('password','password obligatorio').not().isEmpty(),
    validateRequest    
],loginPost);


router.get('/', authGet)




module.exports = router