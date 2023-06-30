// Router for "/skills"
const express = require('express');
const router = express.Router();
const skillCtrl = require("../controllers/skills");

router.get("/", skillCtrl.index);
router.get("/update/:id", skillCtrl.updateForm);
router.put("/:id", skillCtrl.update);
router.get("/create", skillCtrl.createForm);
router.post("/", skillCtrl.create);
router.delete("/:id", skillCtrl.remove);
router.get("/:id", skillCtrl.show);

module.exports = router;
