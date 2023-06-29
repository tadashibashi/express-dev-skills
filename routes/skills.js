const express = require('express');
const router = express.Router();
const skillCtrl = require("../controllers/skills");

// all routes mounted from "/skills"

router.get('/', skillCtrl.index);
router.get("/:id", skillCtrl.show);

module.exports = router;
