const Skill = require("../models/Skill");

function index(req, res, next) {
    res.render("skills", {
      title: "Dev Skills",
      skills: Skill.getAll(),
    });
}

function show(req, res, next) {
    const skill = Skill.getOne(req.params["id"]);
    if (skill === null) {
        res.redirect("/error");
        return;
    }

    res.render("skills/show", {
        title: skill.name,
        skill,
    });
}

module.exports = {
    index,
    show,
};
