const { Router } = require("express");
const { usersGet, usersPost } = require("../controllers/user");

const router = Router();

router.get('/', usersGet);
router.get('/', usersPost);


module.exports = router;



