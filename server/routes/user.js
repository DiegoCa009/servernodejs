const { Router } = require("express");
const { usersGet, usersPost, usersDelete } = require("../controllers/user");
const { check } = require("express-validator");
const { isAdminRole } = require("../middelwares/isAdminRole");
const { userExists } = require("../middelwares/userExists");

const router = Router();

router.get('/', usersGet);

router.delete('/delete', [
    userExists,
    isAdminRole
] ,usersDelete)

router.post('/registrer',[
    check('email','Invalid email').isEmail(),
    check('password','password required').isLength({max: 8})
], usersPost);

module.exports = router;



