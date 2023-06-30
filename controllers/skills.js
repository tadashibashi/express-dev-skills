// Controller for "/skills" router

const Skill = require("../models/Skill");

// GET /skills
// Display all skills
function index(req, res, next) {
    res.locals.vars = {
        title: "Dev Skills",
        skills: Skill.getAll(),
    };

    res.render("skills");
}

// GET /skills/:id
// Display one skill
function show(req, res, next) {
    const id = _parseId(req.params["id"]);
    if (id === -1) return;

    const skill = Skill.getOne(id);
    if (skill === null) {
        res.redirect("/error");
        return;
    }

    res.locals.vars = { skill };

    res.render("skills/show");
}


// DELETE /skills/:id
// Remove a skill from the db
function remove(req, res) {
    const id = _parseId(req.params["id"]);
    if (id === -1) return;

    Skill.deleteOne(id);
    res.redirect("/skills");
}


// PUT /skills/:id
// Update a single skill in the db, then redirect back to /skills
function update(req, res) {
    const id = _parseId(req.params["id"]);
    if (id === -1) return;

    const name = req.body["name"];
    if (name === undefined) {
        console.trace("Attempted to update Skill with id " + id + ", but 'name' was undefined!");
        return;
    }

    const learned = (req.body["learned"] !== undefined);

    const icon = req.body["icon"];
    if (icon === undefined) {
        console.trace("Attempted to update Skill with id " + id + ", but 'icon' was undefined!");
        return;
    }

    Skill.updateOne(id, name, learned, icon);

    res.redirect("/skills");
}


// GET /skills/update/:id
// Shows the update form for a particular Skill
function updateForm(req, res) {
    const id = _parseId(req.params["id"]);
    if (id === -1) return;

    const skill = Skill.getOne(id);
    if (!skill) return;

    // Use vars object to avoid undefined globals
    res.locals.vars = { skill };

    res.render("skills/update-form");
}

module.exports = {
    index,
    show,
    //create,
    //createForm,
    update,
    updateForm,
    remove,
};


// ===== Private Helpers ======================================================

/**
 * Takes string received from query string of body, and ensures it is valid
 * @param id {string | undefined}
 * @private
 * @returns {number} id as number, or -1 if invalid
 */
function _parseId(id) {
    if (id === undefined) {
        console.trace("Attempted to view update form for Skill, but could not retrieve 'id'");
        return -1;
    }

    const idNum = parseInt(id);
    if (isNaN(idNum)) {
        console.trace("Attempted to parse id number, but got NaN");
    }

    return idNum;
}
